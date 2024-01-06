import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcomeScreen";
import DispenserScreen from "../screens/DispenserScreen";
import AppNavigator from "./AppNavigator";
import color from "../config/color";
import CustomerScreen from "../screens/CustomersScreen";
import { Text } from "react-native";
import FuelBalanceScreen from "../screens/FuelBalanceScreen";
import MonthlyReportScreen from "../screens/MonthlyReportScreen";
import FuelReceiveScreen from "../screens/FuelReceiveScreen";
import CustomerInfoScreen from "../screens/CustomerInfoScreen";
import CustomerAdd from "../screens/CustomerAddScreen";
import FuelInReportScreen from "../screens/FuelInReportScreen";
import PriceChange from "../screens/Pricechange";
import DebtCustomerScreen from "../screens/DebtCustomerDetail";
import CustomerAccount from "../screens/CustomerAccount";
import CompanyAccount from "../screens/CompanyAccount";
import { UpdateScreen } from "../screens/UpdateScreen";
import UploadToCloud from "../screens/UploadToCloud";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        height: 80,
        backgroundColor: color.button,
      },
      headerTintColor: color.light,
    }}
  >
    {/* <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{
                headerShown:false
            }}       
        /> */}
    <Stack.Screen
      name="Dispensersd"
      component={AppNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Customers"
      component={CustomerScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Balance"
      component={FuelBalanceScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Monthly"
      component={MonthlyReportScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Receive"
      component={FuelReceiveScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Customer Info"
      component={CustomerInfoScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Customer Add"
      component={CustomerAdd}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Fuel In Reports"
      component={FuelInReportScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Price Change"
      component={PriceChange}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Debt Customer Detail"
      component={DebtCustomerScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Customer Account"
      component={CustomerAccount}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Company Account"
      component={CompanyAccount}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Update"
      component={UpdateScreen}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
    <Stack.Screen
      name="Upload to Cloud"
      component={UploadToCloud}
      options={{
        headerStyle: {
          backgroundColor: color.bottomActiveNavigation,
        },
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
