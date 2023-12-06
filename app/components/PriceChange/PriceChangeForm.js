//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import color from '../../config/color';
import Button from '../Button';
import PriceChangeApi from '../../api/PriceChange';
import LoadingIndicator from '../Loading';
import { useNavigation } from '@react-navigation/core'


// create a component
const PriceChangeForm = () => {

    const [ninetyTwo, setNinetyTwo] = useState('');
    const [ninetyFive, setNinetyFive] = useState('');
    const [hsd, setHsd] = useState('');
    const [phsd, setPhsd] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [ninetyTwoError, setNinetyTwoError] = useState(false);
    const [ninetyFiveError, setNinetyFiveError] = useState(false);
    const [hsdError, setHsdError] = useState(false);
    const [phsdError, setPhsdError] = useState(false);
 


    const handleChange = (e) => { 


        if (ninetyTwo.length == 0) {
            setNinetyTwoError(true);
        }
        if (ninetyFive.length == 0) {
            setNinetyFiveError(true);
        }
        if (hsd.length == 0) {
            setHsdError(true)
        }
        if (phsd.length == 0) {
            setPhsdError(true)
        }



        if (ninetyTwo.length > 0 && ninetyFive.length > 0 && hsd.length > 0 && phsd.length > 0) {
            setNinetyTwoError(false);
            setNinetyFiveError(false);
            setHsdError(false);
            setPhsdError(false)

         const priceChangeObj = {
            ninety_two:ninetyTwo,
            ninety_five:ninetyFive,
            HSD:hsd,
            PHSD:phsd
         };
            
           
            const fetchIt = async (priceChangeObj) => {
            setLoading(true);
                const response = await PriceChangeApi.priceChange(priceChangeObj);

                console.log(response);
                if (response.data.result) {
                    setSuccess(true);
                     setNinetyTwo('');
                     setNinetyFive('');
                    setHsd('');
                     setPhsd('');
                }
            setLoading(false);


            };
            
            fetchIt(priceChangeObj);
            
        }


       
       

        // console.log(priceChangeObj);

    };


  useEffect(() => {
    const interval = setInterval(() => {
     
      
        setSuccess(false);

  
    }, 2000); // Update the values every second

    return () => {
      clearInterval(interval);
    };
  }, [success]);
  

    return (
        <>
            {
                loading && <LoadingIndicator/>
            }
         <ScrollView
          contentContainerStyle={styles.scrollView}
        style={{
            minHeight: '100%',
            marginTop:50
                }}>
                {
                    success && <Text style={{
                        color: 'black',
                        fontSize: 20,
                        padding:20,
                        backgroundColor:color.activeColor
                    }}>
                        Success !
                    </Text>
                }
             
            <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '200',
                textAlign: 'center',
                marginBottom:5
            }}>Price Change Form</Text>
            <View style={{ backgroundColor: color.white, height: 550, width: '100%', padding: 30, elevation: 40 ,borderRadius:10}}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 30,
                    paddingTop:10
                }}>
                    <Text  style={{width:150}}>001-OctaneRone(92)</Text>
                    <TextInput onChangeText={(value) => setNinetyTwo(value)} value={ninetyTwo} style={{ backgroundColor: 'white', color: 'black', width: 250, borderWidth: 0.5, borderRadius: 5, padding: 15 }} placeholder='Enter Price' />
                    
                </View>  
                {
                        ninetyTwoError && <Text style={{color:color.danger,textAlign:'right',marginTop:8,marginRight:50,fontWeight:'400'}}>This field is required</Text>
                    }
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 30,
                     paddingTop:10
                }}>
                    <Text  style={{width:150}}>002-OctaneRone(95)</Text>
                    <TextInput onChangeText={(value)=>setNinetyFive(value)} value={ninetyFive} style={{backgroundColor:'white',color:'black',width:250,borderWidth:0.5,borderRadius:5,padding:15}} placeholder='Enter Price' />
                </View>   
                {
                    ninetyFiveError && <Text style={{color:color.danger,textAlign:'right',marginTop:8,marginRight:50,fontWeight:'400'}}>This field is required</Text>
                }
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 30,
                    paddingTop:10
                }}>
                    <Text  style={{width:150}}>004-Diesel</Text>
                    <TextInput onChangeText={(value)=>setHsd(value)} value={hsd} style={{backgroundColor:'white',color:'black',width:250,borderWidth:0.5,borderRadius:5,padding:15}} placeholder='Enter Price' />
                </View>   
                {
                    hsdError && <Text style={{color:color.danger,textAlign:'right',marginTop:8,marginRight:50,fontWeight:'400'}}>This field is required</Text>
                }
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 30,
                     paddingTop:10
                }}>
                    <Text  style={{width:150}}>005-Premium Diesel</Text>
                    <TextInput onChangeText={(value)=>setPhsd(value)} value={phsd} style={{backgroundColor:'white',color:'black',width:250,borderWidth:0.5,borderRadius:5,padding:15}} placeholder='Enter Price' />
                </View>   
                {
                    phsdError && <Text style={{color:color.danger,textAlign:'right',marginTop:8,marginRight:50,fontWeight:'400'}}>This field is required</Text>
                }
                <Button onPress={(e)=>handleChange(e)}  color={color.bottomActiveNavigation} title={"Change Price"} />
          </View>
        </ScrollView>
        </>
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
    },
});

//make this component available to the app
export default PriceChangeForm;
