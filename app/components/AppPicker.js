import { View, Text, TouchableWithoutFeedback, StyleSheet,Modal, FlatList } from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import PickerItems from "./PickerItems";
import color from "../config/color";
import { useEffect, useState } from "react";
import AppText from "./AppText";
import { Screen } from "react-native-screens";
import Button from "./Button";
import AppTextInput from "./AppTextInput";
import SearchBar from "./SearchBar";


function AppPicker({ icon,items, placeholder,selectedItem,onSelectedItem,onSearch,customer,categories, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [customers,setCustomers] = useState(items)
    let label;
    let value;

    if (customer) {
        label = 'customerName'
        value =  'customerId'
    } else{
        label = 'label'
        value = 'value'
    }





    const handleSearch = (value) => {
       
        setCustomers(items.filter((user) =>

            user.customerId.toString().includes(value.toUpperCase()) || user.customerName.toUpperCase().includes(value.toUpperCase())

            // user.customerName.toUpperCase().includes(value.toUpperCase()) && user.customerId.toString().includes(value.toString())
        ))
    }
    

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
                            (<AppText style={{ flex: 1 }} styles={styles.text}>{selectedItem[label]}</AppText>):
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
                  backgroundColor:color.bottomNavigation
              }}>
                  <Button title={"Close"} onPress={() => setModalVisible(false)}></Button> 
                  {
                      customer ? <SearchBar onSearch={handleSearch} />:''
               }
                <FlatList
                      style={{
                          paddingBottom:200
                       }}
                        data={customers}
                        keyExtractor={(item) => item[value].toString()}
                        renderItem={({ item }) =>  
                        <PickerItems
                        customer={customer}
                        item={item} 
                        categories={categories}
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
        backgroundColor: color.light,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: 5,
        marginVertical: 10,
    },
    icon: {
        marginRight: 20
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: color.light,
        flex: 1
    }
});


export default AppPicker