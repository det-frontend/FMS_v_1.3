import { View, Text, TouchableWithoutFeedback, StyleSheet,Modal, FlatList } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useEffect, useState } from "react";
import Button from "./Button";
import ReadyStateItem from "./ReadyStateItem";
import color from "../config/color";
import AppText from "./AppText";


function ReadyStatePicker({ icon, placeholder,selectedItem,onSelectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    
    const [categories, setCategories] = useState([
  { label: "kyat", value: 1 },
  { label: "liter", value: 2 },
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
                            <ReadyStateItem
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
        flexDirection: 'row',
        alignItems:'center',
        width: '20%',
        paddingHorizontal:5,
        height:35,
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


export default ReadyStatePicker