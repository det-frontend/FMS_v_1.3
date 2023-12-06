//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView,TouchableOpacity } from 'react-native';
import Screen from '../../components/Screen';
import color from '../../config/color';
import Header from '../../components/CustomerDetail/Header';
import AppTextInput from '../../components/AppTextInput';
import Button from '../../components/Button';
import CustomerDebtApi from '../../api/customerDebt';
import LoadingIndicator from '../../components/Loading';
import InputTextComponent from '../../components/Accounts/InputTextComponent';



// create a component
const DebtCustomerScreen = ({route}) => {
    const [mokData, setMokData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [credit, setCredit] = useState(null);
    const [userObj, setUserObj] = useState({
        name: '',
        phone_no: '',
        cus_id: '',
    });
    const [loading, setLoading] = useState(false);
    const [fetchIt, setReFetch] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const [totalPageNo, setTotalPageNo] = useState(0);
    const [totalDataCount, setTotalDataCount] = useState(0);
     const [managerUsername, setmanagerUserName] = useState('');
    const [managerUsernameError, setmanagerUserNameError] = useState(false);
    const [managerPassword, setManagerPassword] = useState('');
    const [managerPasswordError, setManagerPasswordError] = useState(false);


    useEffect(() => {
        const fetchIt = async (obj) => {
            setLoading(true);
            const response = await CustomerDebtApi.searchByObj(obj);

            
            if (response.ok) {
                setTotalCount(response.data.result[0].couObjId.cou_debt);
                setUserObj({
                    name: response.data.result[0].couObjId.cou_name,
                    phone_no: response.data.result[0].couObjId.cou_phone,
                    cus_id: response.data.result[0].couObjId.cou_id
                })
            }

            setMokData(response.data.result);
            setLoading(false);
        };

        fetchIt(route.params.objId)
    }, [route]);

    useEffect(() => {
        const fetchIt = async (obj) => {
            setLoading(true);
            const response = await CustomerDebtApi.searchByObj(obj);
            
            if (response.ok) {
                setTotalCount(response.data.result[0].couObjId.cou_debt);
                setUserObj({
                    name: response.data.result[0].couObjId.cou_name,
                    phone_no: response.data.result[0].couObjId.cou_phone,
                    cus_id: response.data.result[0].couObjId.cou_id
                })
            }
            const totalCount = response.data.totalCount;
            setTotalDataCount(totalCount);
            const pagNo = Math.ceil(parseInt(totalCount) / 50);
            setTotalPageNo(pagNo);

            setMokData(response.data.result);
            setCredit('');
            setLoading(false);
        };

        fetchIt(route.params.objId)
    }, [fetchIt]);

    useEffect(() => {
         const fetchIt = async (obj,pagi) => {
             setLoading(true);
             const response = await CustomerDebtApi.debtCustomersByPagi(pagi, obj);
             


            
            if (response.ok) {
                setTotalCount(response.data.result[0].couObjId.cou_debt);
                setUserObj({
                    name: response.data.result[0].couObjId.cou_name,
                    phone_no: response.data.result[0].couObjId.cou_phone,
                    cus_id: response.data.result[0].couObjId.cou_id
                })
             };
         const totalCount = response.data.totalCount;
            const pagNo = Math.ceil(parseInt(totalCount) / 50);
             setTotalPageNo(pagNo);
             
             console.log(totalPageNo);

            setMokData(response.data.result);
            setLoading(false);
        };

        fetchIt(route.params.objId,pageNo)
    },[pageNo])

      const handleHello = (value) => {
        setCredit(value);
      };
    
    const handlePrint = async () => {

        if (managerUsername.length == 0) {
            setmanagerUserNameError(true);
        } else {
            setmanagerUserNameError(false);
        }
        if (managerPassword.length == 0) {
            setManagerPasswordError(true);
        } else {
            setManagerPasswordError(false);
        }


        if (!managerPasswordError && !managerUsernameError) {
            
        setPageNo(1);
        const obj = {
            couObjId: route.params.objId,
            deposit: credit,
            email: managerUsername,
            password:managerPassword
        };



            const response = await CustomerDebtApi.paid(obj);
            
        setManagerPassword('');
        setmanagerUserName('');

        setReFetch((prev) => !prev);
        }
        };
    
    const handleNext = () => {
            if (totalPageNo === pageNo) return;
            setPageNo((prev) => prev + 1);
    };

    const handlePrev = () => { 
        if (pageNo == 1) {
            setPageNo(1);
        } else {
            setPageNo((prev) => prev - 1);
        }
    };


    return (
        <>{
            loading && <LoadingIndicator/>
        }
          <ScrollView backgroundColor={color.bottomActiveNavigation} style={{
            paddingLeft: 15,
            paddingRight:15
     }}>
            <Header userObj={userObj} />
            <View style={{
                flexDirection: 'row',
                gap: 10,
                marginTop:10
            }}>
                <View style={{
                    width: '40%',
                    height: 200,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems:'center'
                }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight:'bold'
                    }}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'200'
                        }}>Total Debt to Pay -</Text>{totalCount} MMk</Text>
                </View>
                <View style={{
                    width: '59%',
                    height: 240,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems:'center'
                    }}>
                    <AppTextInput onSearch={(value)=>setmanagerUserName(value)} value={managerUsername} icon={'account-supervisor'} width={80} placeholder="Manager Name" />
                        <AppTextInput secureTextEntry={true} onSearch={(value) => setManagerPassword(value)} value={managerPassword} icon={'key-change'} width={80} placeholder="Manager Password" />
                        {
                            managerPasswordError || managerUsernameError ? <Text
                            style={{
                                color:color.danger
                            }}
                            >Manager permission is required</Text> : ''
                        }
                    <AppTextInput onSearch={handleHello} value={credit} icon={'cash-register'} width={80} placeholder="Credit" />
                   
                      <TouchableOpacity onPress={handlePrint}>
                                <View style={{
                                    backgroundColor: color.bottomActiveNavigation,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: 45,
                                    width:200,
                                    marginTop:5
                                 }}>
                                <Text style={{
                                    color:'white'
                                }}>Paid</Text>
                           </View>
                           </TouchableOpacity>
                </View>
            </View>
            <View style={{
                    marginTop: 30,
                marginBottom:30
            }}>
                 <View style={{ borderBottomWidth:0.5, backgroundColor: 'white', height: 70, padding: 5, flexDirection: 'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
                        <Text style={{width:'16%'}}>Date</Text>
                        <Text style={{width:'16%'}}>Voucher No</Text>
                        <Text style={{width:'16%'}}>Deposite </Text>
                        <Text style={{width:'16%'}}>Credit</Text>
                        <Text style={{width:'16%'}}>Liter</Text>
                    
                    </View>
                    {
                        mokData.map((obj, index) => (
                            <View key={index} style={{ backgroundColor: 'white', height: 50, padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                                <Text style={{ width: '16%' }}>{obj.dateOfDay}</Text>
                                <Text style={{ width: '16%' }}>{obj.vocono}</Text>
                                <Text style={{ width: '16%', color: color.danger, fontWeight: 'bold' }}> {obj.deposit == 0 ? "----" : `- ${obj.deposit}`}</Text>
                                <Text style={{ width: '16%', color: color.activeColor, fontWeight: 'bold' }}>+ {obj.credit}</Text>
                                <Text style={{ width: '16%', fontWeight: 'bold' }}>{obj.liter == 0 ? "---" : obj.liter}</Text>
                            </View>
                        ))
                    }
                    <Text style={{
                        marginTop:20,
                        fontSize: 18,
                        color:'white'
                    }}>Total Count - ( {totalDataCount} )</Text>
                  <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              
                <Button color={color.activeColor} onPress={handlePrev}  title={"< Previous"} width={10} />
                <Text style={{
                    color: 'white',
                    backgroundColor: color.activeColor,
                    padding:14.5,
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: color.bottomActiveNavigation,
                    borderWidth:0.5,
                    marginBottom:-9.5
                        }}>{pageNo}</Text>
                <Button color={color.activeColor} onPress={handleNext}  title={"Next >"} width={10} />
            </View>
           </View>
     </ScrollView></>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DebtCustomerScreen;
