import { View, Text, TouchableWithoutFeedback, StyleSheet,Modal, FlatList } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useEffect, useState } from "react";
import AppText from "../AppText";
import Button from "../Button";
import color from "../../config/color";
import PurposeOfUseItem from "./PurposeofUseItem";






function PurposeOfUsePicker({ icon, placeholder,selectedItem,onSelectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [categories, setCategories] = useState([
  { label: "Cycle", value: 1 },
  { label: "Cycle ( 3 Wheels )", value: 2 },
  { label: "Car", value: 3 },
  { label: "Bus ( City )", value: 4 },
  { label: "Bus ( High Way )", value: 5 },
  { label: "Light Truck ( City )", value: 6 },
  { label: "Light Truck ( High way )", value: 7 },
  { label: "Trailer ( City )", value: 8 },
  { label: "Trailer ( High way )", value: 9 },
  { label: "Htawlargyi", value: 10 },
  { label: "Tractor", value: 11 },
  { label: "Small Tractor", value: 12 },
  { label: "Heavy Machinery", value: 13 },
  { label: "Phone Tower", value: 14 },
  { label: "Industrial Zone", value: 15 },
  { label: "Generator Industry", value: 16 },
  { label: "Agriculture Machine", value: 17 },
  { label: "Generator ( Home Use )", value: 18 },
  { label: "Hospital", value: 19 },
  { label: "School", value: 20 },
  { label: "Super Market", value: 21 },
  { label: "Hotel", value: 22 },
  { label: "Housing", value: 23 },
  { label: "Boat", value: 24 },
  { label: "Pump Test", value:25},
  {label:"Station Bowser",value:26},
  {label:"Station Use",value:27}
]);




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
                            (<AppText style={{ flex: 1 }}  styles={styles.text}>{selectedItem}</AppText>):
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
                          paddingBottom:200
                       }}
                        data={categories}
                        keyExtractor={(item) => item['value'].toString()}
                        renderItem={({ item }) =>  
                            <PurposeOfUseItem
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
        marginVertical: 5,
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


export default PurposeOfUsePicker