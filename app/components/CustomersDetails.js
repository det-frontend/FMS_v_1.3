//import liraries
import React, { Component ,useEffect,useState} from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import {
    Collapse,
    CollapseBody,
    CollapseHeader
} from 'accordion-collapse-react-native'
import color from '../config/color';
import fonts from '../config/fonts';
import AppTextInput from './AppTextInput';
import Button from './Button';
import CustomerDebtApi from '../api/customerDebt';
import { useNavigation } from '@react-navigation/core';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// create a component
const CustomerDetails = ({ item,setReFetch }) => {
    const [credit, setCredit] = useState(null);
    const [noData, setNoData] = useState(false);
    const [datas, setDatas] = useState(false);

    const navigation = useNavigation();


    useEffect(() => {
        const fetchIt = async (obj) => {
            const response = await CustomerDebtApi.searchByObj(obj);

            if (response.data.result.length == 0) {
                setNoData(true);
            }

            if (response.data.result.length > 0) {
                setDatas(response.data.result[0]);
            }
        }

        fetchIt(item.item._id)
    },[])
    
    const handleHello = (value) => {
        setCredit(value);
    };

    const handlePrint = async () => {

        const obj = {
            couObjId: item.item.couObjId._id,
            deposit: credit
        };

        const response = await CustomerDebtApi.paid(obj);
        
        setReFetch((prev) => !prev);

    };


    const handleNext = () => {
        navigation.navigate('Debt Customer Detail',{objId:datas.couObjId._id})
    }


    return (
        <View style={styles.container}>
            <Collapse style={{
                width: 1000,
                backgroundColor: color.bottomActiveNavigation,
                borderRadius: 15,
                marginVertical: 5,
            }}>
                <CollapseHeader style={{
                    padding: 10,
                    height:120,
                    flexDirection: 'row',
                    justifyContent:'space-between'
                }}>
                    <View style={{
                        width: 270,
                        alignItems: 'center',
                        flexDirection:'row',
                        justifyContent: 'flex-start',
                        gap:2,
                        backgroundColor: '#747d8c',
                        padding: 20,
                        borderRadius: 15,
                    }}>
                        <Image  style={{width:100,height:100}} source={require('../../assets/userId.png')}/>
                        <View>
                               <Text
                            style={{
                            color: 'black',
                            fontWeight: 300,
                            paddingLeft:10,
                            paddingRight:10,
                            fontSize: fonts.subHeaderSmall,
                            textTransform: 'uppercase',
                            marginBottom:20
                            
                    }}
                            >{item.item['cou_name']}</Text>
                          <Text
                            style={{
                            color: 'black',
                            fontWeight: 'bold',
                            paddingLeft:10,
                            paddingRight:10,
                            fontSize:fonts.subHeaderSmall
                    }}
                    >ID : {item.item['cou_id']}</Text>        
                       </View>
                   </View>
                    <View style={{
                        backgroundColor: '#747d8c',
                        width: '70%',
                        borderRadius: 15,
                        padding: 20,
                        flexDirection: 'row',
                        gap: 30,
                        
                    }}>
                        {
                            noData && <Text style={{
                                fontWeight: 'bold',
                                textAlign:'center'
                            }}>This Customer is debt clear!</Text>
                        }
                        {
                            datas?   <View style={{gap:10}}>
                               <Text style={{ color: color.bottomActiveNavigation, fontWeight:'400',fontSize:16}}> Date - {datas['dateOfDay']}</Text>
                        <Text style={{ color: color.bottomActiveNavigation, fontWeight:'400',fontSize:16,marginTop:10}}> Voucher No - {datas['vocono']}</Text>
                        </View>:''
                       }
                     
                        {
                            datas?  <View style={{gap:15}}>
                                <Text style={{ color: color.bottomActiveNavigation, fontWeight: '400', fontSize: 16 }}> Customer Phone Number - {datas['couObjId']['cou_phone']}</Text>
                                <TouchableOpacity onPress={handleNext}>
                                      <Text style={{ color: color.activeColor, fontWeight: '500', fontSize: 18,flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:7}}>Watch Details <MaterialCommunityIcons style={{marginRight:50}} size={20} name='arrow-collapse-right'/> </Text>
                                </TouchableOpacity>
                       </View>:''
                        }
                      
 

                    </View>
                    
                </CollapseHeader>
                <CollapseBody>
                    <View style={{
                        backgroundColor: '#747d8c',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent:'space-between',
                        height: 230,
                        width: '98%',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        padding:10
                    }}>
                        {/* {
                            datas?      <View style={{
                            padding: 10,
                            width:'30%'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontWeight: 400,
                            }}>Credit</Text>
                            <AppTextInput onSearch={handleHello} icon={'cash-register'} width={100} placeholder="Credit" />
                            <TouchableOpacity onPress={handlePrint}>
                                <View style={{
                                    backgroundColor: color.bottomActiveNavigation,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 45,
                                    marginTop:5
                                 }}>
                                <Text style={{
                                    color:'white'
                                }}>Paid</Text>
                           </View>
                           </TouchableOpacity>
                    </View>:''
                   } */}
                        {
                            datas?   <View style={{
                            width: '80%',
                            marginLeft: 'auto',
                            marginRight:'auto',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            paddingRight: 30,
                            gap:5
                        }}>
                            <View style={{
                                borderWidth: 1,
                                width: 150,
                                height: 150,
                                borderColor:color.activeColor,
                                alignItems: 'center',
                                justifyContent:'center',
                                flexDirection: 'row',
                                backgroundColor: color.bottomActiveNavigation,
                                borderRadius: 100,
                                position:'relative'
                                
                    }}>
                                <Text style={styles.text}>{datas['deposit']}</Text>
                                <Text style={{
                                    position: 'absolute',
                                    bottom:-25
                             }}>Deposite</Text>
                            </View>
                             <View style={{
                                borderWidth: 1,
                                width: 150,
                                height: 150,
                                borderColor:color.activeColor,
                                alignItems: 'center',
                                justifyContent:'center',
                                flexDirection: 'row',
                                backgroundColor: color.bottomActiveNavigation,
                                borderRadius: 100,
                                position:'relative'
                                
                    }}>
                                <Text style={styles.text}> - {datas['credit']}</Text>
                                <Text style={{
                                    position: 'absolute',
                                    bottom:-25
                             }}>Credit</Text>
                            </View>
      <View style={{
                                borderWidth: 1,
                                width: 150,
                                height: 150,
                                borderColor:color.activeColor,
                                alignItems: 'center',
                                justifyContent:'center',
                                flexDirection: 'row',
                                backgroundColor: color.bottomActiveNavigation,
                                borderRadius: 100,
                                position:'relative'
                                
                    }}>
                                <Text style={styles.text}>{datas['couObjId']['cou_debt']}</Text>
                                <Text style={{
                                    position: 'absolute',
                                    bottom:-25
                             }}>Total Debt</Text>
                            </View>
                            <View style={{
                                borderWidth: 1,
                                width: 150,
                                height: 150,
                                borderColor:color.activeColor,
                                alignItems: 'center',
                                justifyContent:'center',
                                flexDirection: 'row',
                                backgroundColor: color.bottomActiveNavigation,
                                borderRadius: 100,
                                position:'relative'
                                
                    }}>
                                <Text style={styles.text}>{datas['liter']}</Text>
                                     <Text style={{
                                    position: 'absolute',
                                    bottom:-25
                             }}>Liter</Text>
                    </View>
                    </View>:''
                     }
                   </View>
                </CollapseBody>
            </Collapse>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderRadius:15,
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: '300',
        color: 'white',
        textAlign:'center'
    }
});

//make this component available to the app
export default CustomerDetails;
