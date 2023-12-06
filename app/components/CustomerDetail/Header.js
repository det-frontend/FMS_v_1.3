//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

// create a component
const Header = ({ userObj }) => {
    console.log(userObj)
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap:20
            }}>
                <Image style={{ width: 150, height: 150 }} source={require('../../../assets/userId.png')} />
                 <View style={{
                height: '70%',
                gap:30,
            }}>
                    <Text style={{ fontWeight: '300', fontSize: 16 }}>Customer Name -  {userObj.name}</Text>
                    <Text style={{ fontWeight: '300', fontSize: 16 }}>Customer ID -  {userObj.cus_id}</Text>
            </View>
            </View>
           
            <View style={{
                height: '70%',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                paddingTop:20,
                paddingBottom:20,
            }}>
                <Text style={{ fontWeight: '300', fontSize: 16 }}>Customer Phone No - {userObj.phone_no}</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent:'space-around',
        alignItems: 'center',
        flexDirection:'row'
    },
});

//make this component available to the app
export default Header;
