import { TouchableOpacity,Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import color from '../config/color';

function PickerItems({ item, onPress,tank, customer,customerId,categories,fuel }) {
  

  let title;
  let icon;

  
  if (item) {
    title = item.label
    icon = 'scatter-plot'
  };

  if (customer) {
    title = item.cou_name;
    icon = 'account-supervisor-circle-outline'

  }

  if (customerId) {
    title = item.cou_id;
    icon = 'id-card'
  }

  if (tank) {
    title = item.value;
    icon = 'arrange-send-to-back'
  }

  if (fuel) {
    title = item.value;
    icon = 'fuel'
  }

  return (
    <TouchableOpacity style={{
     padding:5
   }} onPress={onPress}>
      <View style={{
              padding:5,
              color:'white',
              borderRadius:5,
              justifyContent: 'space-between',
              alignItems:'center',
              flexDirection:'row',
              backgroundColor:'#353b48'
      }}>
         {
          categories? <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap:20,
        }}>
          <MaterialCommunityIcons name={icon} size={30} color={color.activeColor} />
          <Text style={{
            color: 'white',
            fontWeight:200
          }}>Purpose of Use - {title}</Text>
        </View>:''
       }
        {
          tank? <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap:20,
        }}>
            <MaterialCommunityIcons name={icon} size={30} color={color.activeColor} />
          <Text style={{
            color: 'white',
            fontWeight:200
          }}>Tank No - {title}</Text>
        </View>:''
        }
         {
          fuel? <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap:20,
        }}>
            <MaterialCommunityIcons name={icon} size={30} color={color.activeColor} />
          <Text style={{
            color: 'white',
            fontWeight:200
          }}>Fuel Type - {title}</Text>
        </View>:''
       }
        {
          customer ? <View style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection:'row'
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap:20
          }}>
            <MaterialCommunityIcons name={icon} size={30} color={color.activeColor}/>
            <Text style={{
            color: 'white',
            fontWeight:300
            }}><Text style={{
            fontWeight:'bold'
          }}>Customer Name - </Text>{item.cou_name}</Text>
            </View>
             <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap:20
          }}>
              <MaterialCommunityIcons name={'card-account-details'} size={30} color={color.activeColor}/>
            <Text style={{
            color: 'white',
            fontWeight:300
            }}><Text style={{
            fontWeight:'bold'
          }}>Customer Id - </Text>{item.cou_id}</Text>
          </View>
          </View>:''
        }
        {
          customerId? <View style={{
            width: '100%',
            justifyContent: 'space-between',
            flexDirection:'row'
          }}>
             <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              width:300
          }}>
              <MaterialCommunityIcons name={'card-account-details'} size={30} color={color.activeColor}/>
            <Text style={{
            color: 'white',
            fontWeight:300
            }}><Text style={{
            fontWeight:'bold'
          }}>Customer Id - </Text>{item.customerId}</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              width:300
          }}>
            <MaterialCommunityIcons name={icon} size={30} color={color.activeColor}/>
            <Text style={{
            color: 'white',
            fontWeight:300
            }}><Text style={{
            fontWeight:'bold'
          }}>Customer Name - </Text>{item.customerName}</Text>
            </View>
          </View>:''
        }
        </View>
   </TouchableOpacity>
  ) 
}

export default PickerItems