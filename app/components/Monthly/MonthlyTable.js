//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MonthlyTableDetails from './MonthlyTableDetails';
import Button from '../Button';
import color from '../../config/color';

// create a component
const MonthlyTable = ({item,totalDataCount,pageNo,handleNext,handlePrev}) => {
    return (
          <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#2f3542'
            }}>
            <View style={[styles.cell,{width: '12.5%',height:80}]}>
            <Text style={{color:'white'}}>User Id</Text>
            </View>   
            <View style={[styles.cell,{width: '12.5%',height:80}]}>
            <Text style={{color:'white'}}>Vocono</Text>
            </View>   
            <View style={[styles.cell,{width: "12.5%"}]}>
            <Text style={{color:'white'}}>User Name</Text>
            </View>   
            <View style={[styles.cell,{width: "12.5%"}]}>
            <Text style={{color:'white'}}>Get Date</Text>
            </View>   
            <View style={[styles.cell,{width: '12.5%'}]}>
            <Text style={{color:'white'}}>Credit</Text>
            </View>   
            <View style={[styles.cell,{width: '12.5%'}]}>
            <Text style={{color:'white'}}>Deposit</Text>
            </View>   
            <View style={[styles.cell,{width:'12.5%'}]}>
            <Text style={{color:'white'}}>Statement</Text>
            </View>   
            <View style={[styles.cell,{width:'12.5%'}]}>
            <Text style={{color:'white'}}>Balance</Text>
            </View>      
            </View>
             {
                item.map((obj,index)=><MonthlyTableDetails key={index} item={obj}/>)
            }
            <Text style={{fontSize:15,margin:10,fontWeight:'400',color:color.light}}>Total Data Count <Text style={{fontSize:24,fontWeight:'400'}}> - ({totalDataCount})</Text></Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Button color={color.activeColor} onPress={handlePrev} title={"< Previous"} width={10} />
                <Text style={{
                    color: 'white',
                    backgroundColor: color.activeColor,
                    padding:14.5,
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: color.bottomActiveNavigation,
                    borderWidth:1,
                    marginBottom:-9.5
                }}>{pageNo}</Text>
                <Button color={color.activeColor} onPress={handleNext} title={"Next >"} width={10} />
            </View>
            </View>
    );
};


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
export default MonthlyTable;
