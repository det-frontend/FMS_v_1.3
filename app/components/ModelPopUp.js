import { useEffect, useState } from 'react';
import { View,StyleSheet,Modal } from 'react-native';
import color from '../config/color';

function ModelPopUp({ visible, children }) {
    const [showModel, setShowModel] = useState(visible);

    useEffect(() => {
       toggleModel()
    }, [visible]);

    const toggleModel = () => {
        if (visible) {
            setShowModel(true);
        } else {
            setShowModel(false)
        }
    }

  return (
    <Modal transparent visible={showModel} animationType='fade'>
    <View style={styles.container}>       
    <View style={[styles.modalContainer]}>
    {children}              
    </View>
   </View>
   </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position:'relative'
    },
    modalContainer: {
        width: '55%',
        height:'100%',
        backgroundColor: color.bottomNavigation,
        paddingHorizontal:30,
        elevation:30
    }
})


export default ModelPopUp