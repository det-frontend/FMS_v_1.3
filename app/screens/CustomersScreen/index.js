//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import color from '../../config/color';
import CustomerDetails from '../../components/CustomersDetails';
import SearchBar from '../../components/SearchBar';
import GetCustomerApi from '../../api/getCustomer';
import CustomerDebtApi from '../../api/customerDebt';
import authStorage from '../../auth/storage';
import axios from 'axios';
import LoadingIndicator from '../../components/Loading';

// create a component
const CustomerScreen = () => {
  const [customers, setCustomers] = useState();
  const [reFetch, setReFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [primaryCustomers, setPrimaryCustomers] = useState([]);



  useEffect(() => {

    const fetchIt = async () => {
      const response = await CustomerDebtApi.getDebtCustomers();
      const customer = await GetCustomerApi.customer();

      setPrimaryCustomers(customer.data.result);


      setCustomers(response.data.result.reverse());
    };

    fetchIt();

  }, [])

  
  useEffect(() => {
    const fetchIt = async () => {
       setLoading(true);
       
      const response = await CustomerDebtApi.getDebtCustomers();

       setCustomers(response.data.result.reverse());
       setLoading(false);
    };

    fetchIt();
  },[reFetch])

  const handleSearch = async(value) => {
    const apiUrl = `http://192.168.0.100:9000/api/customer/search?key=${value}`;


    try {
       const authToken = await authStorage.getToken();
       const response = await axios.get(apiUrl,{
  headers: {
    'Authorization': `Basic ${authToken}` 
  }
});
      setPrimaryCustomers(response.data.result)
      // Handle the response data as needed
      setCustomers(response.data.result);
    } catch (error) {
      console.error('Error:', error);
      // Handle the error condition
    }
  };
    
    
    return (
      <View style={styles.container}>
        {
          loading && <LoadingIndicator/>
        }
        <SearchBar onSearch={handleSearch} />
            <View style={styles.customerContainer}>
                  <FlatList
                data={primaryCustomers}
                keyExtractor={(customer) => customer['_id']}
                renderItem={(customer) => <CustomerDetails item={customer} setReFetch={setReFetch} />}
            />
          </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.bottomNavigation,
    },
    customerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height:"80%"
    }
});

//make this component available to the app
export default CustomerScreen;
