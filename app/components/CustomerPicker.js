import { View, Text, TouchableWithoutFeedback, StyleSheet,Modal, FlatList } from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import PickerItems from "./PickerItems";
import color from "../config/color";
import { useEffect, useState } from "react";
import AppText from "./AppText";
import Button from "./Button";
import SearchBar from "./SearchBar";
import debounce from 'lodash.debounce';
import axios from "axios";
import authStorage from '../auth/storage';


const def_cus =[{
    "_id": null,
    "cou_name": "Individual Customer",
    "cou_id":''
}]

function CustomerPicker({ icon,items, placeholder,selectedItem,onSelectedItem,onSearch,customer,customerId, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [customers, setCustomers] = useState([]);
    let label;
    let value;

    if (customer) {
        label = 'cou_name'
        value =  'cou_id'
    } else if(customerId){
        label = 'cou_id'
        value = 'cou_id'
    }


    useEffect(() => {
        setCustomers([]);
        setCustomers(def_cus);

    }, []);



    const handleSearch = debounce(async (searchText) => {
    const apiUrl = `http://192.168.0.100:9000/api/customer/search?key=${searchText}`;
        try {
        const authToken = await authStorage.getToken();
        
        const response = await axios.get(apiUrl,{
  headers: {
    'Authorization': `Basic ${authToken}` 
  }
});
        

        

       

        if (response.data.result.length === 0) {
            setCustomers(def_cus);
        } else {

            let all = response.data.result;
            all.push({
                "_id": null,
                "cou_name": "Individual Customer",
                "cou_id": ''
            });



             setCustomers(all);
        }

      // Handle the response data as needed
    } catch (error) {
      console.error('Error:', error);
      // Handle the error condition
    }
  }, 500);
    

  return (
      <>
      <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
              <View style={styles.container}>
                {icon && <MaterialCommunityIcons
              name={icon}
              size={25}
              color={'black'}
              style={styles.icon}
                  />}
                    {
                        selectedItem ?
                            (<AppText style={{ flex: 1 }}  styles={styles.text}>{selectedItem[label]}</AppText>):
                            (<AppText style={{flex:1}} styles={styles.placeholder}>{placeholder}</AppText>)
                  }
            <MaterialCommunityIcons
              name='chevron-down'
              size={20}
              color={'black'}
                  />
              </View>       


          </TouchableWithoutFeedback>
           <Modal visible={modalVisible}  animationType='slide'>
              <View style={{
                  flex: 1,
                  backgroundColor: color.bottomActiveNavigation,
              }}>
                  <Button title={"Close"} onPress={() => setModalVisible(false)}></Button> 
                  <SearchBar onSearch={handleSearch} />
                   {
                      customers.length === 0 ? <Text style={{
                          fontSize: 20,
                          color: 'white',
                          fontWeight:'100'
                      }}>Please Search Your Customer Name</Text>:''
                  }
                  <FlatList
                      style={{
                          paddingBottom:200
                      }}
                        data={customers}
                        keyExtractor={(item) => item[value]}
                        renderItem={({ item }) =>  
                        <PickerItems
                                customer={customer}
                                customerId={customerId}
                                item={item}
                                onPress={() => {
                                    onSelectedItem(item);
                                    setModalVisible(false);
                                }} />
                            }
                    />

                 
              </View>
            </Modal>
      </>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor:color.light,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center',
        width: '100%',
        padding: 5,
        marginVertical: 10,
    },
    icon: {
       marginRight:20
    },
    text: {
        flex: 1,
    },
    placeholder: {
        color:color.light,
        flex:1
    }
})


export default CustomerPicker