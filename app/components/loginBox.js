import {
    View,
    TextInput,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native'
import color from '../config/color'
import fonts from '../config/fonts'
import AppText from './AppText'
import * as Yup from 'yup';
import authApi from '../api/auth';

import {ErrorMsg,SubmitButton,AppForm,AppFormField} from './Forms/index';
import { useContext, useState } from 'react';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import stationStorage from '../auth/stationId';
import {useNetInfo} from '@react-native-community/netinfo'
import LoadingIndicator from './Loading';


function LoginBox({ navigation }) {
 const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const netInfo = useNetInfo();


  const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Email'),
    password: Yup.string().required().min(4).label('Password')
  });

      
  const handleSubmit = async ({ email, password }) => {

    const result = await authApi.login(email, password);
    setLoading(true);
    if (!result?.ok) {
      setLoginFailed(true);
      setLoading(false);
      return;
    };
    setLoginFailed(false); 
    setLoading(false);

    stationStorage.setSatationId(result.data.result.stationId);
    authStorage.setToken(result.data.result.token);
    const decodeUser = await authStorage.getUser();
    authContext.setUser(decodeUser.email);
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      {
        loading && <LoadingIndicator/>
      }
      <ErrorMsg error="Something went wrong!" visible={loginFailed}/>
      <View style={styles.content}>
          <Image style={styles.img} source={require('../../assets/IMG_6843.png')}/>
        <View style={styles.detailsContent}>
          <AppText
            fontSize={fonts.header}
            fontWeight={500}
          >Digital Engineering Tech</AppText>
          <AppText
            fontSize={fonts.subHeaderSmall}
            fontWeight={500}
            color={color.sublight}
          >Fuel Station Management System</AppText>
        </View>
      </View>
      
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      > 

      <AppFormField
        icon={'email'}
        placeholder='Email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType="emailAddress"
        autoCorrect={false}
        name="email"
      />
      <AppFormField
        icon={'lock'}
        placeholder="Password"
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        name="password"
        />
    <SubmitButton  title={"Login"} /> 
      </AppForm>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding:20,
    justifyContent: 'center',
    elevation: 30,
    shadowColor: '#2d3038',
    position:'relative'
  },
  img: {
    width: 75,
    height: 75,
  },
  text: {
    fontSize: fonts.header,
    fontFamily:'Poppins-Regular'
  },
  content: {
    gap:10,
    flexDirection:'row',
    alignItems: 'center',
    marginVertical:30
  },
  detailsContent: {
    justifyContent: 'center',
    gap:2
  },
  button: {
    fontWeight: 'light',
    color: color.danger,
    fontSize: 18,
    marginTop:15
  }
})

export default LoginBox