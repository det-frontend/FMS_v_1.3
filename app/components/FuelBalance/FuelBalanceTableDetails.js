//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../../config/color';
import defaultStyles from '../../config/styles';


// create a component
const FuelBalanceTableDetails = ({item}) => {
    return (
        <View style={{
                flexDirection: 'row',
                backgroundColor:color.bottomActiveNavigation
            }}>
            <View style={[defaultStyles.tableCell,{
                width: "12.5%",
                alignItems: 'flex-start',
           }]}>
                <Text style={[styles.text,{
                    fontSize:12
                }]}>{item.tankNo}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
                width: '12.5%',
                alignItems: 'flex-start',
           }]}>
                <Text style={[defaultStyles.tableCellText,{
                    fontSize: 12,
                }]}>{item.fuelType}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
                width: '12.5%',
                alignItems:'flex-start'
           }]}>
                <Text style={defaultStyles.tableCellText}>{item.capacity}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems:'flex-end'
           }]}>
                <Text style={defaultStyles.tableCellText}>{parseInt(item.opening) == 0?"-":parseInt(item.opening).toFixed(3)}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems:'flex-end'
           }]}>
                <Text style={defaultStyles.tableCellText}>{(parseInt(item.receive_volume) == 0?"-":parseInt(item.fuelIn).toFixed(3))}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems: 'flex-end',
           }]}>
                <Text style={defaultStyles.tableCellText}>{(parseInt(item.fuelIn) == 0?"-":(parseInt(item.fuelIn) / 4.16).toFixed(3))}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems: 'flex-end',
           }]}>
                <Text style={defaultStyles.tableCellText}>{(parseInt(item.sale) == 0?"-":(parseInt(item.cash)).toFixed(3))}</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{
               width:'12.5%',
               alignItems:'flex-end'
           }]}>
                <Text style={defaultStyles.tableCellText}>{(parseInt(item.balance) == 0?"-":parseInt(item.balance).toFixed(3))}</Text>
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
export default FuelBalanceTableDetails;
