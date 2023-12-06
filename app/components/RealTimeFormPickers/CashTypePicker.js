import { View, Text, TouchableWithoutFeedback, StyleSheet,Modal, FlatList } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useEffect, useState } from "react";
import AppText from "../AppText";
import Button from "../Button";
import color from "../../config/color";
import CashPickerItem from "./CashPickerItem";






function CashTypePicker({ icon,items, placeholder,selectedItem,onSelectedItem, ...otherProps }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [payments, setPayments] = useState([
    {
        id: 1,
        method: 'Cash',
        iconName: 'cash'
    },
    {
        id: 2,
        method: 'KBZ_Pay',
        iconName: 'cellphone',
    },
    {
        id: 3,
        method: 'Credit',
        iconName: 'credit-card'
    },
     {
        id: 4,
        method: 'Debt',
        iconName: 'cash-minus'
    },
    {
        id: 5,
        method: 'FOC',
        iconName: 'office-building'
    },
    {
        id: 6,
        method: 'Others',
        iconName:'more'
    }
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
                          paddingBottom:500
                       }}
                        data={payments}
                        keyExtractor={(item) => item['id'].toString()}
                        renderItem={({ item }) =>  
                            <CashPickerItem
                                
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


export default CashTypePicker