import { 
    View,
    Text
} from 'react-native';
import defaultStyles from '../../config/realtimestyles';

function ShowPrice({price}) {
  return (
      <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap:10
    }}>
    <View style={defaultStyles.show}>
        <Text style={defaultStyles.text}>{price}</Text>      
    </View>
    <Text style={[defaultStyles.text,{fontSize:14}]}>Price</Text>
   </View>
  )
}

export default ShowPrice