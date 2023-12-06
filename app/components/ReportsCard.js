//import liraries
import React, { Component } from 'react';
import defaultStyles from '../config/reportstyles';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import color from '../config/color';

// create a component
const ReportsCard = ({ image, name, navigation, route, status }) => {

    return (
    <TouchableOpacity onPress={status?()=>navigation.navigate(route):()=>console.log("h")}>
        <View style={{
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            position:'relative',
            borderWidth:1,
            borderRadius:10
            }}>
              
        <View style={defaultStyles.card}>
              {
                        !status ? <Text style={{
                            position: 'absolute',
                            backgroundColor: color.yello,
                            padding: 10,
                            width: '130%',
                            zIndex: 99,
                            fontSize:16,
                            fontWeight: 'bold',
                            textAlign: 'center',
                    }}>Coming Soon</Text>:''
                }
        <Image style={defaultStyles.image} source={image} />
        <View style={defaultStyles.cardBottom}></View>
        <Text style={defaultStyles.text}>{name}</Text>
        </View>
     
        </View>
    </TouchableOpacity>
    );
};


export default ReportsCard;
