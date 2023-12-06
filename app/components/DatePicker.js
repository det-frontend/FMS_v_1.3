//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

// create a component
const DatePicker = ({value}) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name='calendar-month' size={30} color="black"/>
            <TextInput style={{
                color:'black'
            }} value={value} editable={false}  />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent: 'flex-start',
        padding: 8,
        gap: 10,
        borderRadius: 10,
        alignItems:'center',
    },
});

//make this component available to the app
export default DatePicker;
