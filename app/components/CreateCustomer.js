//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const CreateCustomer = () => {
    return (
        <View style={styles.container}>
            <Text>CreateCustomer</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ecc71',
        width: 300,
        height:400
    },
});

//make this component available to the app
export default CreateCustomer;
