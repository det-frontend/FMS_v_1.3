import {Text,View,Image,Linking, TouchableOpacity, Alert} from 'react-native';
import {styles} from './accountscreen.styles'
import Button from "../../components/Button";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import authStorage from '../../auth/storage';
import {useEffect, useState } from "react";
import useAuth from '../../auth/useAuth';
import autoPermit from '../../api/autoPermit';
import CustomerSearchBar from '../../components/Customer/CustomerSearchBar';
import color from '../../config/color';
import PermitButton from '../../components/PermitButton';
import Paho from 'paho-mqtt';



function AccountScreen() {
  const [person, setPerson] = useState();
  const { user, setUser } = useAuth();
  const [conditon, setCondition] = useState('');

  
  useEffect(() => {
    const ok = async () => {
      const kk = await authStorage.getUser();
      setPerson(kk.email)
    }
    ok();


    const fetchIt = async () => {
      const result = await autoPermit.getPermit();
      if (result.data) {
        if (result.data.result) {
          setCondition(result.data.result.mode);
        }
      }
    };

    fetchIt();

    
  }, []);

  function onMessage(message) {
    if (message.destinationName === "detpos/local_server/mode") {
      setCondition(message.payloadString)
    }
  }

  useEffect(() => {
    client = new Paho.Client(
      '192.168.0.100',
      Number(9001),
      `android-${parseInt(Math.random() * 100)}`
    );

    mqtt_option = {
      onSuccess: () => {
        client.subscribe('detpos/device/#');
        client.subscribe('detpos/local_server/#');
        console.log("Account Screen Mqtt is Connected");
      },
      onFailure: (err) => { console.log(err) },
      userName: 'detpos',
      password: 'asdffdsa',
      useSSL: false
    };

    client.connect(mqtt_option);
    client.onMessageArrived = onMessage

  }, []);

  const handleLogout = () => {
    setUser(null);
    const ok = async () => {
    const kerj = await authStorage.removeToken();
    console.log(kerj);
    }
    ok();
  };

  const handlePress = () => {
     const appStoreUrl = 'https://drive.google.com/drive/u/0/folders/1lhPUOJlauGjY1pVwZyZi3szU4FaURNeZ';
  Linking.openURL(appStoreUrl)
    .catch(err => console.error('An error occurred', err));
  };

  const createButtonAlert = (text) => {
    Alert.alert('Auto Permit Permission', text, [
      {
        text: "Cancel",
        onPress:()=>console.log("cancel Pressed")
      },
      {
        text: "Sure",
        onPress:()=>handleSwitch()
      }
    ])
  }

  const handleSwitch = async() => {
    if (conditon === "allow") {
      const result = await autoPermit.permit({ mode: "manual" });
      if (result.data) {
        if (result.data.result) {
          setCondition(result.data.result.mode);
        }
      }
    } else if(conditon === "manual") {
      const result = await autoPermit.permit({ mode: "allow" });
      if (result.data) {
        if (result.data.result) {
          setCondition(result.data.result.mode);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
    
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        backgroundColor: '#2C3A47',
        padding: 10,
        marginTop:20,
        borderRadius:15
      }}>
         <View style={styles.image} >
        <Image style={{ width: 100, height: 100 }} source={require('../../../assets/user.png')} />
      </View>
        <Text style={styles.text}>{person}</Text>
      </View>
      <View style={{
      }}>
      </View>
    
     {conditon === "allow" ? (
       <PermitButton open={true}  handleClick={()=>createButtonAlert("Are you sure to close auto-permit? ")}  text="Active Auto Permit"/>
  ) : conditon === "manual" ? (
       <PermitButton open={false} handleClick={()=>createButtonAlert("Are you sure to open auto-permit?")} text="Inactive Auto Permit"/>
  ) : conditon === "dead" ? (
     <PermitButton text="Auto Permit Dead"/>
  ) : (
        <PermitButton text="Loading"/>
      )}
        <Text style={{fontSize:16,color:"#ffff",marginVertical:10}}>This App is V-1.7</Text>
      <Button width={30} color={'#596275'} onPress={handleLogout} title={"Logout"} />
    </View>
  )
}

export default AccountScreen