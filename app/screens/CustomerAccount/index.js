//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, ScrollView,KeyboardAvoidingView } from 'react-native';
import InputTextComponent from '../../components/Accounts/InputTextComponent';
import Button from '../../components/Button';
import color from '../../config/color';
import LoadingIndicator from '../../components/Loading';
import CustomerAddApi from '../../api/getCustomer';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// create a component
const CustomerAccount = () => {
    const [customerName, setCustomerName] = useState('');
    const [customerNRC, setCustomerNRC] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerSecondaryPhone, setCustomerSecondaryPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [customerCompanyName, setCustomerCompanyName] = useState('');
    const [limit, setLimit] = useState('');
    const [customerNameError, setCustomerNameError] = useState('');
    const [customerNRCError, setCustomerNRCError] = useState('');
    const [customerPhoneError, setCustomerPhoneError] = useState('');
    const [customerSecondaryPhoneError, setCustomerSecondaryPhoneError] = useState('');
    const [customerAddressError, setCustomerAddressError] = useState('');
    const [customerCompanyNameError, setCustomerCompanyNameError] = useState('');
    const [limitError, setLimitError] = useState('');
    const [loading, setLoading] = useState(false);
    const [condition, setCondition] = useState(false);
    const [error, setError] = useState(false);
    const [managerUsername, setmanagerUserName] = useState('');
    const [managerUsernameError, setmanagerUserNameError] = useState(false);
    const [managerPassword, setManagerPassword] = useState('');
    const [managerPasswordError, setManagerPasswordError] = useState(false);

  const navigation = useNavigation();
  

    const handleCreate = async() => {
       
        if (customerName.length == 0) {
            setCustomerNameError(true);
        } else {
            setCustomerNameError(false);
        }
        if (customerNRC.length == 0) {
            setCustomerNRCError(true);
        } else {
            setCustomerNRCError(false);
            
        }
        if (customerPhone.length == 0) {
            setCustomerPhoneError(true);

        } else {
            setCustomerPhoneError(false);
        }
        if (customerSecondaryPhone.length == 0) {
            setCustomerSecondaryPhoneError(true);

        } else {
            setCustomerSecondaryPhoneError(false);
        }
        if (customerAddress.length == 0) {
            setCustomerAddressError(true);

        } else {
            setCustomerAddressError(false);
            
        }
        if (customerCompanyName.length == 0) {
            setCustomerCompanyNameError(true);

        } else {
            setCustomerCompanyNameError(false);
        }
        if (limit.length == 0) {
            setLimitError(true);

        } else {
            setLimitError(false);
        }

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

        if (!customerNameError && !customerNRCError && !customerPhoneError && !customerSecondaryPhoneError && !customerAddressError && !customerCompanyNameError && !limitError && !managerPasswordError && !managerUsernameError) {


            console.log(managerPassword, managerUsername);

            const response = await CustomerAddApi.addCustomer(customerName, customerPhone, customerSecondaryPhone, customerAddress, managerUsername, managerPassword);
            

            console.log(response.data);


            if (response.data.con) {
                setCustomerName('');
                setCustomerPhone('');
                setCustomerSecondaryPhone('');
                setCustomerAddress('');
                setCondition(true);
                navigation.navigate('Customer Info');
                setError(false);
            }
            if (response.data.con == false) {
                setError(true);
            }

        }
    }

    return (
        <>
            {
                loading && <LoadingIndicator/>
            }
             <View style={styles.container}>
            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '300',
                color: color.white,
                marginTop:30
            }}>Customer Account</Text>
            <KeyboardAvoidingView style={{
                flex:1
            }}>
                    <ScrollView
                contentContainerStyle={{
                    height:500
                    
            }}
            >
                   <KeyboardAvoidingView style={{
                width: '55%',
                marginLeft: 'auto',
                marginRight:'auto',
               height: 500,
                        }}>
                            {
                                condition && <View style={{
                                marginTop: 5,
                                borderRadius: 5,
                                padding:3,
                            backgroundColor: color.activeColor,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                            }}>
                                 <MaterialCommunityIcons name='information' size={30} color={color.yello} />
                                <Text style={{
                                fontSize: 16,
                                color: color.screenbg,
                                fontWeight: '300',
                            }}>
                               Customer Account Creation Is Success!</Text>
                            </View>
                            }
                            {
                                error && <View style={{
                                marginTop: 5,
                                borderRadius: 5,
                                padding:3,
                            backgroundColor: color.activeColor,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 10,
                            }}>
                                 <MaterialCommunityIcons name='information' size={30} color={color.yello} />
                                <Text style={{
                                fontSize: 16,
                                color: color.screenbg,
                                fontWeight: '300',
                            }}>
                               Customer Account Creation Is Fail!</Text>
                            </View>
                            }
                  <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                  <InputTextComponent
                title={"Manager User Name"}
                placeholder={"Manager User Name"}
                value={managerUsername}
                error={managerUsernameError}
                onChangeText={(value)=>setmanagerUserName(value)}
            />
          <InputTextComponent
                title={"Manager Password"}
                placeholder={"Manager Password"}
                password
                value={managerPassword}
                error={managerPasswordError}
                onChangeText={(value)=>setManagerPassword(value)}
            />
           </View>
                  <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                  <InputTextComponent
                title={"Name"}
                placeholder={"Customer name"}
                value={customerName}
                error={customerNameError}
                onChangeText={(value)=>setCustomerName(value)}
            />
          <InputTextComponent
                title={"Number"}
                placeholder={"Customer Phone Number"}
                value={customerPhone}
                error={customerPhoneError}
                onChangeText={(value)=>setCustomerPhone(value)}
            />
           </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
            }}
            >
                
            <InputTextComponent
                title={"Secondary Number"}
                placeholder={"Customer Secondary Phone Number"}
                value={customerSecondaryPhone}
                error={customerSecondaryPhoneError}
                onChangeText={(value)=>setCustomerSecondaryPhone(value)}
                                />
            <InputTextComponent
                title={"Address"}
                placeholder={"Customer Address"}
                value={customerAddress}
                error={customerAddressError}
                onChangeText={(value)=>setCustomerAddress(value)}
            />
           </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between',
            }}
            >
            <InputTextComponent
                title={"Limit"}
                placeholder={"Limit"}
                keyboardType={'numeric'}
                value={limit}
                error={limitError}
                onChangeText={(value)=>setLimit(value)}
                                />
                                <View style={{
                                    marginLeft: 10,
                                    width: 200,
                                    marginTop:5
                                }}>
                                    <Button onPress={handleCreate}  title={"Create"} color={color.activeColor} width={100} />
</View>
           </View>
          </KeyboardAvoidingView>
         </ScrollView>
        </KeyboardAvoidingView>
        </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default CustomerAccount;
