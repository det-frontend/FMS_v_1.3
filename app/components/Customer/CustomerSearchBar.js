import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import debounce from 'lodash.debounce';
import axios from 'axios';

const CustomerSearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = debounce(async () => {
    const apiUrl = `http://192.168.0.106:9000/api/customer/search?key=${searchText}`;

    try {
      const response = await axios.get(apiUrl);
      console.log('Response:', response.data);
      // Handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle the error condition
    }
  }, 500); // Debounce delay of 500 milliseconds

  const onChangeText = (text) => {
    setSearchText(text);
    handleSearch();
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10,borderWidth:2,width:400 }}
          onChangeText={onChangeText}
          value={searchText}
          placeholder="Enter search keyword"
        />
      <TouchableOpacity onPress={handleSearch}>
          <Text style={{ marginTop: 10, color: 'blue' }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerSearchBar;
