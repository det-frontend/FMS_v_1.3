//import liraries
import React, { forwardRef, useRef, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,RefreshControl,TouchableOpacity } from 'react-native';
import color from '../config/color';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fonts from '../config/fonts';
import Button from './Button';
import * as Yup from 'yup';
import { AppForm, AppFormField, SubmitButton } from './Forms';
import LoadingIndicator from './Loading';
import AddClientApi from './../api/getCustomer';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
    customer_name: Yup.string().required().label("Customer Name"),
    customer_phone_number:Yup.string().required().min(5).label("Phone Number")
})
// create a component
const UserNotFound = ({add}) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const formRef = useRef();


  


  const handleSubmit = async (values, submitProps) => {
    setLoading(true);
    const { customer_name, customer_phone_number } = values;
    const response = await AddClientApi.addCustomer(customer_name, customer_phone_number);
    setLoading(false);

   
    navigation.dispatch( StackActions.pop(1));
  };
  
  const handleCustomer = () => { 
    navigation.navigate('Customer Account')
  };

  const handleCompany = () => { 
    navigation.navigate('Company Account')
  };


    return (
      <View style={styles.container}> 
        <Text style={{
          fontSize: 24,
          fontWeight: '100',
          color: color.white,
          position: 'absolute',
          top:0
        }}>Customer or Company</Text>
        <View style={styles.whichOneContainer}>
          <TouchableOpacity onPress={handleCustomer} style={styles.button}>
          <Text style={styles.text}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCompany} style={styles.button}>
          <Text style={styles.text}>Company</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 30,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 15,
        flexDirection: 'column',
        height: 400,
        marginTop:-80,
    width: '100%',
        
  },
  whichOneContainer: {
    flexDirection: 'row',
    gap:30
  },
    notFound: {
        flexDirection: 'row',
        gap:20,  
    },
    text: {
        color: 'white',
        fontSize: fonts.header,
        fontWeight:100
  },
  button: {
    borderWidth: 2,
    width: 200,
    height: 100,
    backgroundColor: color.activeColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
});

//make this component available to the app
export default UserNotFound;
