//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TableFrame from '../../components/TableFrame';
import TankPicker from '../../components/TankPicker';
import color from '../../config/color';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from '../../components/Forms';
import stationStorage from '../../auth/stationId';
import FuelTypePicker from '../../components/FuelTypePicker';
import FuelInApi from '../../api/fuelIn';
import LoadingIndicator from '../../components/Loading';
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core'

const items = [
    {
        id: 1,
        value: 1
    },
    {
        id: 2,
        value: 2
    },
    {
        id: 3,
        value: 3
    },
    {
        id: 4,
        value: 4
    },
    {
        id: 5,
        value: 5
    },
    {
        id: 6,
        value: 6
    },
    {
        id: 7,
        value: 7
    },
    {
        id: 8,
        value: 8
    },
];

const fuelType = [
    {
        id: 1,
        value: '001-Octane Ron(92)'
    },
    {
        id: 2,
        value: '002-Octane Ron(95)'
    },
    {
        id: 3,
        value: '004-Diesel'
    },
    {
        id: 4,
        value: '005-Premium Diesel'
    }
]


const validationSchema = Yup.object().shape({
    receive_liter: Yup.string().required().label("Receive Liter"),
    driver_name: Yup.string().required().label("Dirver Name").min(2),
    bowser_no: Yup.string().required().label("Bowser No").min(4)
});
// create a component
const FuelReceiveScreen = () => {
    const [item, setItem] = useState(items[0]);
    const [fuelT, setFuelT] = useState(fuelType[0]);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const handlePress = (item) => {
        setItem(item);
    }

  const handleSubmit = async(values,helpers) => {
      const stationId = await stationStorage.getStationId();


 const currentDate = new Date();
const formattedDate = currentDate.toISOString().split('T')[0];



        
        const bodyObj = {
            stationId: stationId,
            driver: values.driver_name,
            bowser: values.bowser_no,
            tankNo: item.value,
            fuel_type: fuelT.value,
            recive_balance: parseInt(values.receive_liter),
            receive_date : formattedDate
        };


      setLoading(true);
      const response = await FuelInApi.fuelIn(bodyObj);
        if (response.ok) {
            navigation.replace('Fuel In Reports')
        } 
        setLoading(false);
        
        helpers.resetForm({
            values,
          });

    };
 
    return (
        <>
         {
                loading && <LoadingIndicator/>
            }
        <ScrollView style={styles.container}>
           
        <View style={{
            backgroundColor: color.bottomActiveNavigation,
            padding:10,
            borderRadius:15,
            elevation:50,
            marginBottom:30,
            borderWidth:0.5,
            height:'100%',
            
            }}>
        <AppForm
        initialValues={{tankNo:{},receive_liter:'',driver_name:'',bowser_no:''}}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        >
        <TankPicker selectedItem={item} label={'value'} onSelectedItem={(value)=>setItem(value)} value={"id"} placeholder={"Please Select Tank No."} icon={'bitbucket'}  items={items} />
        <FuelTypePicker selectedItem={fuelT} label={'value'} onSelectedItem={(value)=>setFuelT(value)} value={"id"} placeholder={"Please Select Fuel Type."} icon={'fuel'} items={fuelType} />

       <View style={{
        flexDirection:'row',
        alignItems:'flex-end',
       }}>
        
       <View style={{
        width:'60%'
       }}>
        <AppFormField
        width={80}
        icon={'label'}
        placeholder="Bowser No"
        autoCapitalize="none"
        autoCorrect={false}
        name="bowser_no"
        />
        <AppFormField
        width={80}
        icon={'car-back'}
        placeholder="Driver Name"
        autoCapitalize="none"
        autoCorrect={false}
        name="driver_name"
        />
        <AppFormField
        width={80}
        icon={'litecoin'}
        placeholder="Receive Liters"
        autoCapitalize="none"
        autoCorrect={false}
        name="receive_liter"
        />
       </View>
       <SubmitButton  title={"Input"}/>
       </View>  
        </AppForm>
        </View>
        </ScrollView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: color.bottomNavigation,
    },
});

//make this component available to the app
export default FuelReceiveScreen;
