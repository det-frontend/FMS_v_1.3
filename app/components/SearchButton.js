import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import color from '../config/color';
import fonts from '../config/fonts';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function SearchButton({title,color = "#1e272e",onPress,width = 100,icon,iconColor}) {
  return (
    <TouchableOpacity style={{
        width: `${width}%`,
        backgroundColor: color,
        borderRadius: 10,
        height: 50,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        justifyContent: 'center',
        alignItems:'center',
        marginBottom:10,
        borderWidth:0.5,
        borderColor:'grey'
    }}  onPress={onPress}>          
          <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap:10
      }}>
    <MaterialCommunityIcons  color={iconColor} size={30} name={icon} />
              <Text style={{color:'white'}}>{title}</Text>
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
        fontSize:15,
    }
})

export default SearchButton