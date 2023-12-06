//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo,{useNetInfo} from '@react-native-community/netinfo'
import color from '../config/color';

// create a component
const ConnectionCheck = () => {
 
    const netInfo = useNetInfo();

    return netInfo.isInternetReachable? <View style={[styles.error,{backgroundColor:'#2ecc71'}]}><Text style={styles.text}>Internet connection is with you.</Text></View> : <View style={[styles.error,{backgroundColor:'#e74c3c'}]}><Text>Internet connection is not with you.</Text></View>
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        position: 'absolute',
    },
    error: {
        padding: 20,
    },
    text: {
        fontWeight: 'light',
        color: 'white',
        letterSpacing:2
    }
});

//make this component available to the app
export default ConnectionCheck;
