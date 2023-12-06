//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import color from '../../config/color';

// create a component
const InputTextComponent = (
    {
        onChangeText,
        placeholder,
        value,
        title,
        error,
        password,
        keyboardType
    }
) => {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 12,
                color: color.light,
                fontWeight: '300',
                width:'100%',
                textAlign: 'left',
                marginBottom: 10,
            }}>{title}</Text>
            <TextInput style={{
                backgroundColor: color.white,
                height: 40,
                borderRadius: 5,
                width: 300,
                padding: 10,
            }} secureTextEntry={password} keyboardType={keyboardType} onChangeText={onChangeText} value={value} placeholder={placeholder} />
            {
                error &&  <Text style={{
                color: color.danger,
                marginTop: 2,
                fontWeight:'400',
                width:'100%'
            }}>This field is required</Text>
           }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: 200,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        
    },
});

//make this component available to the app
export default InputTextComponent;
