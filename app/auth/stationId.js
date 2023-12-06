import * as SecureStore from 'expo-secure-store';

const key = "stationId";



const setSatationId = async stationId => {
    try {
      return  await SecureStore.setItemAsync(key, stationId);
    } catch (error) {
        console.log("Error storing the stationId", error);
    }
};

const getStationId = async stationId => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting the stationId", error)
    }
};

const removeToken = async () => {
    try {
      return  await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the remove stationId", error)
    }
};

export default {
    setSatationId,
    getStationId,
    removeToken
}