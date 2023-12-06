import { FlatList, ScrollView } from 'react-native';
import {
    View,
    Text
} from 'react-native';
import Button from './Button';
import color from '../config/color';
import PaymentButton from './PaymentButton';
import { useState } from 'react';
import AppTextInput from './AppTextInput';


const paymentMethods = [
    {
        id: 1,
        method: 'Cash',
        iconName: 'cash'
    },
    {
        id: 2,
        method: 'KBZ_Pay',
        iconName: 'cellphone',
    },
    {
        id: 3,
        method: 'Credit',
        iconName: 'credit-card'
    },
     {
        id: 4,
        method: 'Debt',
        iconName: 'cash-minus'
    },
    {
        id: 5,
        method: 'FOC',
        iconName: 'office-building'
    },
    {
        id: 6,
        method: 'Others',
        iconName:'more'
    }
];


function PaymentMethod({getValue}) {
    const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].method);
    const [selected, setSelected] = useState(false);



    const handlePress = (item) => {
        setSelected(false);
        setSelectedMethod(item);
        setSelected(true);
        getValue(item)
    }

  return (
      <View style={{
          padding: 10,
          marginTop: 20,
          backgroundColor: color.bottomActiveNavigation,
          borderRadius: 15,
          elevation: 50,
          shadowColor: 'black',
          position:'relative'
      }}>
          <View style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: color.bottomActiveNavigation,
              zIndex: 99,
              opacity: 0.8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'center'
          }}>
              <Text style={{
                  textAlign: 'center',
                  color: color.white,
                  fontWeight: 'light',
                  fontSize: 20,
              }}>Coming Soon!</Text>
          </View>
          <Text style={{
              color: color.light,
              fontSize: 14,
              marginLeft:10,
              fontWeight:'200'
          }}>Payement</Text>
          <ScrollView horizontal>
          {
              paymentMethods.map((item, index) => (
                <PaymentButton selectedMethod={selectedMethod} handlePress={handlePress}  key={index} title={item.method} icon={item.iconName}/>
              ))
          }
          </ScrollView>
          {/* {selectedMethod === "Others" ?
        <AppTextInput icon={'vector-selection'} placeholder="Others"></AppTextInput>  :''
        } */}
      </View>
  )
}

export default PaymentMethod