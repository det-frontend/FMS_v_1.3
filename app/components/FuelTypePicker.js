import { View, Text, TouchableWithoutFeedback, StyleSheet,Modal, FlatList } from "react-native"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import PickerItems from "./PickerItems";
import color from "../config/color";
import AppText from "./AppText";
import Button from "./Button";
import { useState } from "react";



function FuelTypePicker({ icon,items,label,value,placeholder,selectedItem,onSelectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [customers,setCustomers] = useState(items)

    

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
                            (<AppText style={{ flex: 1 }} styles={styles.text}>Fuel Type - {selectedItem[label]}</AppText>):
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
                  <FlatList
                      style={{
                          paddingBottom:500
                       }}
                        data={customers}
                        keyExtractor={(item) => item[value].toString()}
                        renderItem={({ item }) =>  
                        <PickerItems
                        fuel
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
        flex:1
    },
    placeholder: {
        color:color.light,
        flex:1
    }
})


export default FuelTypePicker