//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FuelBalanceTableDetails from './FuelBalanceTableDetails';
import color from '../../config/color';
import defaultStyles from '../../config/styles';

// create a component
const FuelBalanceTable = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#2f3542'
            }}>  
            <View style={[defaultStyles.tableCell,{width: "12.5%",height:70}]}>
            <Text style={defaultStyles.tableCellText}>Tank</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width: '12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Fuel Type</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width: '12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Capacity</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Opening</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Receive Volume (Li)</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Receive Volume (Gallon)</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Sale</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Balance</Text>
            </View>   
            </View>
                  {
                item.map((obj,index)=><FuelBalanceTableDetails key={index} item={obj}/>)
            }
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 50,
        elevation: 50,
        shadowColor:'black'
    },
    cell: {
        borderWidth:0.5,
        borderColor:'grey',
        justifyContent:'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default FuelBalanceTable;
