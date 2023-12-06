//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import color from '../../config/color';
import Button from '../../components/Button';
import axios from 'axios';
import authStorage from '../../auth/storage';


// create a component
const OTPScreen = () => {
    const [value, setValue] = useState(''); 
    const [success, setSuccess] = useState(false);


 const handleOTP = () => {
    axios.get(`https://detfsmm.com/api/check-station?otpCode=${value}`)
  .then(response => {
     return response.data
  })
  .then(async(data) => {
      const otp = data.result[0].stationId.name;
      const dd = await authStorage.setOTP(otp);
      
      setSuccess(true);


  })
  .catch(error => {
      console.log(error.response.data.error);
      setSuccess(false);
  })
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={{
                    backgroundColor: color.white,
                    width: 600,
                    height: 400,
                    borderRadius: 5,
                }}>
                    {
                        success && <Text style={{
                        backgroundColor: color.activeColor,
                        padding: 20,
                        fontWeight: 'light',
                        fontSize:16
                    }}>OPT success,please reopen again!</Text>
                    }
                    <Text style={{
                        backgroundColor: color.yello,
                        padding: 20,
                        fontWeight: 'light',
                        fontSize:16
                    }}>Get OTP</Text>
                    
                    <View style={{
                        padding:10
                    }}>
                        <Text style={{
                            marginTop: 60,
                            marginBottom:10
                        }}>GET YOUR OTP</Text>
                        <TextInput
                        onChangeText={(value)=>setValue(value)} 
                        placeholder='OTP' style={{
                        width: '100%',
                        borderWidth: 0.5,
                        height: 35,
                      
                        }} />
                        <Button title={'Get Now'} color={color.activeColor} width={50} onPress={handleOTP} />
                   </View>
                </View>
            </View>
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
export default OTPScreen;
