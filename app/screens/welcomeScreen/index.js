import {
    Image,
    View,
    Text,
    
} from 'react-native'
import {styles} from './welcomescreen.styles'
import LoginBox from '../../components/loginBox'
import Screen from '../../components/Screen'
import ConnectionCheck from '../../components/ConnectionCheck'
import authStore from '../../auth/storage';
import OTPScreen from '../OTPScreen'
import { useState } from 'react'
import AppLoading from 'expo-app-loading'
import DispenserScreen from '../DispenserScreen'



function WelcomeScreen({ navigation }) {
  const [isReadyToken, setIsReadyToken] = useState(false);
  const [otpToken, setOtpToken] = useState(null);
  
  //  const restoreOTP = async () => {
  //    const otp = await authStore.getOTP();

  //    console.log(otp);

  //   if (otp !== undefined) setOtpToken(otp);
  //  };
 
  
  //  if (!isReadyToken) return <AppLoading startAsync={restoreOTP} onFinish={() => setIsReadyToken(true)} onError={(err) => console.log(err)} />
  
  return (
    <Screen>
    <View style={styles.container}>
   <LoginBox navigation={navigation} />
    </View>
    </Screen>
  )
}

export default WelcomeScreen