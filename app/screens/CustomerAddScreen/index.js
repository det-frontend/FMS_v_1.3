//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import UserNotFound from '../../components/UserNotFound';
import color from '../../config/color';


// create a component
const CustomerAdd = () => {
    return (
    <View style={styles.container}>
           <UserNotFound  add/>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:70,
        backgroundColor: color.bottomNavigation,
    },
});

//make this component available to the app
export default CustomerAdd;
