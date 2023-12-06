//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import AppTextInput from '../AppTextInput';
import AppText from '../AppText';
import Button from '../Button';
import color from '../../config/color';
import {MaterialCommunityIcons} from '@expo/vector-icons'

// create a component
const ErrorForms = ({ handleUpdate, handleBack, printFormInfo, saleLiter, salePrice,setManagerPassword,setManagerUserName,managerPassword,managerUserName,errorPermission,errorUpdate }) => {


    return (
      <View style={{ marginTop: 10 }}>
            <TouchableOpacity onPress={handleBack} style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginBottom:20
            }}>
                <MaterialCommunityIcons name='backburger' size={40} color={color.activeColor}/>
                <Text style={{
                    color: 'white',
                    fontSize:26
                }}>Back</Text>
              </TouchableOpacity>
            <ScrollView   style={{
                height:'70%'
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between'
              }}>
                <View style={{
                     width:'45%'
                   }}>
             <AppText color='white' fontWeight={'200'} fontSize={15}>User Name</AppText>
              <AppTextInput onSearch={(value)=>setManagerUserName(value)}  value={managerUserName} placeholder="User Name" icon={'face-man'} />
              </View>
                <View style={{
                 width:'45%'
               }}>
              <AppText color='white' fontWeight={'200'} fontSize={15}>Password</AppText>
              <AppTextInput secureTextEntry={true} onSearch={(value)=>setManagerPassword(value)} width={100} value={managerPassword} placeholder="Password" icon={'key-change'} />
            </View>
          </View>
          {
            errorPermission &&  <View style={{
                                borderRadius: 5,
                                padding:3,
                                marginBottom:5,
                                backgroundColor: color.danger,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                            }}>
                                 <MaterialCommunityIcons name='information' size={30} color={color.yello} />
                                <Text style={{
                                fontSize: 14,
                                color: color.screenbg,
                                fontWeight: '300',
                            }}>
                              Manager permission is required!</Text>
                            </View>
          }
          {
            errorUpdate && <View style={{
                                borderRadius: 5,
                                padding:3,
                                marginBottom:5,
                                backgroundColor: color.danger,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                            }}>
                                 <MaterialCommunityIcons name='information' size={30} color={color.yello} />
                                <Text style={{
                                fontSize: 14,
                                color: color.screenbg,
                                fontWeight: '300',
                            }}>
                {errorUpdate}</Text>
                            </View>
          }
                <View style={{
                flexDirection: 'row',
                justifyContent:'space-between'
              }}>
                <View style={{
                     width:'45%'
                   }}>
             <AppText color='white' fontWeight={'200'} fontSize={15}>Sale Liter</AppText>
              <AppTextInput editable={false}   value={saleLiter} placeholder="Sale Liter" icon={'paperclip'} />
              </View>
                <View style={{
                 width:'45%'
               }}>
              <AppText color='white' fontWeight={'200'} fontSize={15}>Sale Price</AppText>
              <AppTextInput  width={100} editable={false} value={salePrice} placeholder="Sale Price" icon={'cash'} />
            </View>
              </View>
                <View style={{
                flexDirection: 'row',
                justifyContent:'space-between'
              }}>
                <View style={{
                     width:'45%'
                   }}>
             <AppText color='white' fontWeight={'200'} fontSize={15}>Vocono</AppText>
              <AppTextInput editable={false}  value={printFormInfo.vocono} placeholder="Vocono Number" icon={'paperclip'} />
              </View>
                <View style={{
                 width:'45%'
               }}>
              <AppText color='white' fontWeight={'200'} fontSize={15}>Cash Type</AppText>
              <AppTextInput width={100} editable={false}  value={printFormInfo.cashType} placeholder="Cash Type" icon={'cash'} />
            </View>
              </View>
              
              <View style={{
                flexDirection: 'row',
                justifyContent:'space-between'
              }}>
                <View style={{
                     width:'45%'
                   }}>
              <AppText color='white' fontWeight={'200'} fontSize={15}>Car No</AppText>
              <AppTextInput width={100}  editable={false} value={printFormInfo.carNo} placeholder="Car No" icon={'car'} />
              </View>
                <View style={{
                 width:'45%'
               }}>
              <AppText color='white' fontWeight={'200'} fontSize={15}>Purpose of Use</AppText>
              <AppTextInput width={100} editable={false}  value={printFormInfo.purposeOfUse} placeholder="Purpose of use" icon={'apps'} />
            </View>
              </View>

                <View style={{
                flexDirection: 'row',
                justifyContent:'space-between'
              }}>
                <View style={{
                     width:'45%'
                   }}>
              <AppText color='white' fontWeight={'200'} fontSize={15}>Customer Name</AppText>
              <AppTextInput width={100} editable={false}  value={printFormInfo.customerName?printFormInfo.customerName:"Customer"} placeholder="Customer Name" icon={'human-male'} />
              </View>
                <View style={{
                 width:'45%'
               }}>
              <AppText color='white' fontWeight={'200'} fontSize={15}>Customer Id</AppText>
              <AppTextInput width={100} editable={false}  value={printFormInfo.customerId?printFormInfo.customerId:'-'} placeholder="Customer Id" icon={'id-card'} />
            </View>
              </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent:'space-between'
                }}>
                  
              <View style={{
                    width: '100%',
                    flexDirection: 'row',
                justifyContent:'center'
              }}>
               <Button title={"Update"} width={50} color={color.activeColor} onPress={handleUpdate} />  
              </View>   
                </View> 
           </ScrollView>
              </View>
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
export default ErrorForms;
