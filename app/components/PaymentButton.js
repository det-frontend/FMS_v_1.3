import {
    View,
    Text
} from 'react-native';
import Button from './Button';
import color from '../config/color';

function PaymentButton({title,icon,handlePress,selectedMethod}) {
    return (
        <View style={{
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          <Button width={70} onPress={()=>handlePress(title)}  color={selectedMethod === title?'white':color.bottomNavigation} iconColor={selectedMethod === title?'black':'white'} icon={icon}/>
            <Text style={{ color: color.light, fontWeight:"300",fontSize:10}}>{title}</Text>
      </View>
  )
}

export default PaymentButton