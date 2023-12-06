import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import color from '../config/color';
import fonts from '../config/fonts';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function Button({title,color = "#1e272e",onPress,width = 100,icon,iconColor,disabled=false}) {
  return (
    <TouchableOpacity style={{
        width: `${width}%`,
        backgroundColor: disabled?"grey":color,
        height: 40,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        justifyContent: 'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:10,
        borderWidth:0.5,
        borderColor:'grey',
        
        
    }} disabled={disabled} onPress={onPress}>          
      <View>
    {
          icon ? <MaterialCommunityIcons color={iconColor} size={20} name={icon} />:  <Text style={styles.text}>{title}</Text>
    }
        
   </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    text: {
        color: color.white,
        fontSize: fonts.text,
        letterSpacing:1,
        fontWeight: '300',
        fontSize:14,
    }
})

export default Button