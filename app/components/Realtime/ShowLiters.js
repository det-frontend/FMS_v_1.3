import {
    View,
    Text
} from 'react-native';
import defaultStyles from '../../config/realtimestyles';

function ShowLiters({liter}) {
  return (
      <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
      }}>
    <View style={defaultStyles.show}>
        <Text style={defaultStyles.text}>{liter}</Text>
    </View>
    <Text style={[defaultStyles.text,{fontSize:14}]}> Liters</Text>
      </View>
  )
}

export default ShowLiters