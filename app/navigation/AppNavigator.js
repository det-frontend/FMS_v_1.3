import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DispenserScreen from '../screens/DispenserScreen';
import ReportScreen from '../screens/ReportsScreen';
import AccountScreen from '../screens/AccountScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import color from '../config/color';
import { View, Image, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewListingButton from './NewListingButton';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

// Header componentr
const HeaderComponent = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center',padding:20 }}>
      <Image
        source={require('../../assets/companyLogo.png')}
        style={{ width: 40, height: 40, borderRadius: 25, marginRight: 10 }}
      />
          <View>
      <Text style={{ fontSize:16, fontWeight: '300', color:color.light,letterSpacing:1 }}>Digital Engineering Tech</Text>
      <Text style={{ fontSize: 10, fontWeight: '300', color:color.light,letterSpacing:1 }}>Fuel Station Management System</Text>
        </View>
          
    </View>
  );
};

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: '#282b32',height:85},
            headerTintColor:color.light,
            tabBarStyle: { backgroundColor: '#2d3038' },
            tabBarActiveBackgroundColor: color.bottomActiveNavigation,
            tabBarActiveTintColor: color.activeColor,
    }}
    >
        <Tab.Screen
            name='Dispensers'
            component={DispenserScreen}
            // options={{
            // title:"Fuel Station Management System",
            // tabBarIcon:({size,color})=><MaterialCommunityIcons name="gas-station" size={size} color={color} />
            // }}
            options={{
                headerTitle: () => <HeaderComponent />,
                 tabBarIcon:({size,color})=><MaterialCommunityIcons name="gas-station" size={20} color={color} />
            }}
        />
        <Tab.Screen 
            name='Reports'
            component={ReportScreen}
            options={{
               headerTitle: () => <HeaderComponent />,
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='record-circle' size={20} color={color} />
            }}
        />
        <Tab.Screen
            name='Account'
            component={AccountScreen}
            options={{
                tabBarIcon:({size,color}) => <MaterialCommunityIcons name='account' size={20       } color={color} />
            }}
        />

    </Tab.Navigator>
);

export default AppNavigator;