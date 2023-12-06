//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ReportCardsLists from '../../components/ReportCardsLists';



const reports = [
    {
        id: 1,
        image: require('../../../assets/useradd.png'),
        name: 'Customer Add',
        route:'Customer Add'
    },
    {
        id: 2,
        image: require('../../../assets/customerInfo.png'),
        name: 'Customers',
        route:'Customers'
    }
];
// create a component
const CustomerInfoScreen = ({navigation}) => {
    return (
           <ReportCardsLists title={"Customers Informations"} reports={reports} navigation={navigation}/>
    );
};

// define your styles
const styles = StyleSheet.create({
});

//make this component available to the app
export default CustomerInfoScreen;
