import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import * as Network from 'expo-network';
import * as Notifications from 'expo-notifications';

const WifiScreen = () => {
    const [isConnected, setIsConnected] = useState(true);
    const [isWifi, setIsWifi] = useState(false);


 
     const fetchIt = async () => { 
          const hello = await Network.getNetworkStateAsync();
          if (hello.isConnected) {
              setIsWifi(true)
          } else {
              setIsWifi(false);
          }
         
         if (hello.isConnected) {
      showWifiConnectedNotification();
    } else {
      clearNotification();
    }
     };
    
     const showWifiConnectedNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'WiFi Connected',
        body: 'You are now connected to WiFi.',
      },
      trigger: null, // Show immediately
    });
     };
    
    const clearNotification = async () => {
    await Notifications.dismissAllNotificationsAsync();
    };

  useEffect(() => {
    // Check WiFi connection status immediately on mount
    fetchIt();

    // Set up an interval to periodically check WiFi connection
    const intervalId = setInterval(fetchIt, 2000); // Check every 5 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isWifi ? (
        <Text>You are connected to WiFi</Text>
      ) : (
        <View>
          <Text>Not connected to WiFi</Text>
        </View>
      )}
    </View>
  )

};

export default WifiScreen;
