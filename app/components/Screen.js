import Constants from 'expo-constants';
import {
    SafeAreaView,
    StyleSheet
} from 'react-native'
import color from '../config/color';


function Screen({ children,backgroundColor = color.screenbg }) {
  return (
      <SafeAreaView style={{
        paddingTop: Constants.statusBarHeight ,
        backgroundColor: backgroundColor,
        flex: 1,
    }}>{children}</SafeAreaView>
  )
};




export default Screen
