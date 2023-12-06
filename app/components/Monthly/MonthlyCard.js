//import liraries
import React, { Component, useEffect ,useState} from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import color from '../../config/color';

// create a component
const MonthlyCard = ({ title, info }) => {
    const [gg, setGG] = useState(0);
    


    useEffect(() => {
        if (title.subTitle == "Total Sale") {
            setGG(info.totalSale);
        };
        if (title.subTitle == 'Total Fuel (Li)') {
            setGG(info.totalLiter);
        }
        if (title.subTitle == 'Total Fuel Gallon') {
            setGG(info.totalFuelGal);
        }
        },[])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title.subTitle}</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap:30
            }}>
                <Text style={styles.sale}>
                    {gg}
                </Text>
                  <Image style={{
                width: 50,
                height:50
            }} source={title.image} />
           </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: 200,
        backgroundColor: '#4b6584',
        borderRadius: 15,
        elevation: 10,
        position:'relative'
    },
    text: {
        color: 'black',
        fontSize: 14,

        fontWeight:300,
        position: 'absolute',
        top: 20,
        left:20,
    },
    sale: {
        color: '#1e272e',
        fontWeight: 500,
        fontSize:23
    }
});

//make this component available to the app
export default MonthlyCard;
