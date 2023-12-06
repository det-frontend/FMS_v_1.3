//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../config/color';

// create a component
const NewListingButton = () => {
    return (
        <View style={styles.container}>
            <Text>NewListingButton</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.activeColor,
        height: 80,
        width: 80,
        borderRadius: 40,
        
    },
});

//make this component available to the app
export default NewListingButton;
