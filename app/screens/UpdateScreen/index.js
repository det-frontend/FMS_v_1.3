import React from 'react'
import { View, StyleSheet,Text,Linking,TouchableOpacity } from 'react-native'
import Screen from '../../components/Screen';
import color from '../../config/color';


export const UpdateScreen = () => {

    const handlePress = () => {
     const appStoreUrl = 'https://drive.google.com/drive/u/0/folders/1lhPUOJlauGjY1pVwZyZi3szU4FaURNeZ';
  Linking.openURL(appStoreUrl)
    .catch(err => console.error('An error occurred', err));
  };
    return (
            <View style={styles.container}>
                   <TouchableOpacity onPress={handlePress} style={{
        backgroundColor: color.activeColor,
        padding: 10,
        width: 150,
        borderRadius:2,
      }}>
        <Text style={{
          textAlign: 'center',
          fontWeight:'bold'
        }}>Update Your App</Text>
      </TouchableOpacity>
          </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.bottomActiveNavigation,
        alignItems: 'center',
        justifyContent:'center'
   }
});


