//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator } from 'react-native';
import color from '../config/color';

// create a component
const LoadingIndicator = () => {
    return (
       <View style={{
          position: 'absolute',
          zIndex:90,
          backgroundColor: 'rgba(17, 23, 20, 0.5)',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'center'
        }}>
          <ActivityIndicator size={'large'} color={color.activeColor}/>
        </View>
    );
};


//make this component available to the app
export default LoadingIndicator;
