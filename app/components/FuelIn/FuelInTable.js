//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import defaultStyles from '../../config/styles';
import FuelInTableDetails from './FuelInTableDetails';
import Button from '../Button';
import color from '../../config/color';


// create a component
const FuelInTable = ({item,pageNo,handleNext,handlePrev,totalDataCount}) => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#2f3542'
            }}>  
            <View style={[defaultStyles.tableCell,{width: "8%",height:70}]}>
            <Text style={defaultStyles.tableCellText}>Receive Date</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width: "12.5%",height:70}]}>
            <Text style={defaultStyles.tableCellText}>Fuel In Code</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width: '12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Driver</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width: '12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Bowser No</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'7%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Tank</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'10%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Tank Capacity</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Receive Volume (Li)</Text>
            </View>    
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Receive Volume (Gallon)</Text>
            </View>   
            <View style={[defaultStyles.tableCell,{width:'12.5%',height:70}]}>
            <Text style={defaultStyles.tableCellText}>Balance</Text>
            </View>  
            </View>
            {
                item.map((obj,index)=><FuelInTableDetails key={index} index={index} item={obj}/>)
            }
            <Text style={{
                color: 'white',
                fontWeight: '100',
                fontSize: 18,
                marginTop:10,
              }}> Total Count - {totalDataCount}</Text>
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
export default FuelInTable;
