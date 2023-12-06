//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../../config/color';
import defaultStyles from '../../config/styles';


// create a component
const FuelInTableDetails = ({item,index}) => {
    return (
        <View style={{
                flexDirection: 'row',
                backgroundColor:color.bottomActiveNavigation
        }}>
             <View style={[defaultStyles.tableCell,{
                width: "8%",
                alignItems: 'center',
           }]}>
                <Text style={[styles.text,{
                    fontSize:12
                }]}>{item.receive_date}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
                width: "12.5%",
                alignItems: 'flex-start',
           }]}>
                <Text style={[styles.text,{
                    fontSize:12
                }]}>{item.fuel_type}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
                width: '12.5%',
                alignItems: 'flex-start',
           }]}>
                <Text style={[defaultStyles.tableCellText,{
                    fontSize: 12,
                }]}>{item.driver}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
                width: '12.5%',
                alignItems:'flex-start'
           }]}>
                <Text style={defaultStyles.tableCellText}>{item.bowser}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'7%',
               alignItems:'center'
           }]}>
                <Text style={defaultStyles.tableCellText}>{item.tankNo}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'10%',
               alignItems:'center'
           }]}>
                <Text style={defaultStyles.tableCellText}>{1450}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems: 'flex-end',
           }]}>
                <Text style={defaultStyles.tableCellText}>{(parseInt(item.recive_balance) == 0?"-":(parseInt(item.recive_balance)).toFixed(3))}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems: 'flex-end',
           }]}>
                <Text style={defaultStyles.tableCellText}>{(parseInt(item.recive_balance) == 0?"-":(parseInt(item.recive_balance/ 4.16)).toFixed(3))}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems:'flex-end'
           }]}>
                <Text style={defaultStyles.tableCellText}>{(parseInt(item.tank_balance) == 0?"-":parseInt(item.tank_balance).toFixed(3))}</Text>
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
    cell: {
         borderWidth:0.5,
        borderColor:'grey',
        justifyContent: 'center',
        padding: 5,
        height:50
    },
    text: {
        color:'#dfe4ea'
    }
});

//make this component available to the app
export default FuelInTableDetails;
