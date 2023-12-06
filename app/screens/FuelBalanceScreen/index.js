
//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView,Button,TouchableOpacity } from 'react-native';
import FuelBalanceTable from '../../components/FuelBalance/FuelbalanceTable';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '../../components/DatePicker';
import SearchButton from '../../components/SearchButton';
import color from '../../config/color';
import FuelApiData from '../../api/fuelBalance';
import stationStorage from '../../auth/stationId';
import LoadingIndicator from '../../components/Loading';



const datas = [
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 1',
        fuel_type: '001-OctaneRon(92)',
        capacity: '14540',
        opening: '1450.000',
        receive_volume: 0,
        receive_gallon: 0,
        sale: 0,
        balance: '11450.000'
    },
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 2',
        fuel_type: '004-Diesel',
        capacity: '14540',
        opening: '7031.032',
        receive_volume: 0,
        receive_gallon: 0,
        sale: 0,
        balance: '7031..032'
    },
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 3',
        fuel_type: '004-Diesel',
        capacity: '14540',
        opening: '3923.126',
        receive_volume: 0,
        receive_gallon: 0,
        sale: '185.000',
        balance: '3738.126'
    },
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 4',
        fuel_type: '005-Premium Diesel',
        capacity: '14540',
        opening: '-433.486',
        receive_volume: 0,
        receive_gallon: 0,
        sale: '27.867',
        balance: '-461.353'
    },
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 5',
        fuel_type: '004-Diesel',
        capacity: '14540',
        opening: '8197.291	',
        receive_volume: 0,
        receive_gallon: 0,
        sale: '672.754',
        balance: '7524.537'
    },
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 6',
        fuel_type: '005-Premium Diesel',
        capacity: '14540',
        opening: '9013.785',
        receive_volume: 0,
        receive_gallon: 0,
        sale: '81.214',
        balance: '8932.571'
    },
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 7',
        fuel_type: '001-Octane Ron(92)',
        capacity: '14540',
        opening: '3127.562',
        receive_volume: 0,
        receive_gallon: 0,
        sale: '54.582',
        balance: '3072.980'
    },
    {
        name: 'kyaw san (ks-027)',
        tank: 'Tank 8',
        fuel_type: '002-Octane Ron(95)',
        capacity: '14540',
        opening: '11842.192	',
        receive_volume: 0,
        receive_gallon: 0,
        sale: '2.396',
        balance: '11839.796'
    },
];



let startDate = new Date();
startDate = startDate.toLocaleDateString();

let endDate = new Date();
endDate = endDate.toLocaleDateString();



// create a component
const FuelBalanceScreen = () => {
    const [mockDatas, setMockDatas] = useState(datas);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [fuelDate, setFuelDate] = useState(startDate);
    const [loading, setLoading] = useState(false);
    const [dateTitle, setDateTitle] = useState(new Date());

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };


    const onChange = ({ type }, selectdDate) => {
        if (type == "set") {
            const currentDate = selectdDate;
            setDate(currentDate);
            toggleDatePicker()
        } else {
            toggleDatePicker();
        }
    };

       
    useEffect(() => {
        let currentDate = new Date(date);
        currentDate = currentDate.toLocaleDateString();

        setFuelDate(currentDate);
    }, [date]);

    useEffect(() => {
        const fetchIt = async () => {
            const stationId = await stationStorage.getStationId();
            // let sDate = date.setHours(0);
            // let eDate = date.setHours(23);
            
            let sDate = date;
            sDate = sDate.toISOString().split('T')[0];
            

            const response = await FuelApiData.response(sDate);


            console.log(response.data);



            const gold = response.data.result.sort((a, b) => a.tankNo - b.tankNo);
            setLoading(false);
            setDateTitle(date);
        
        
            setMockDatas(gold);
        };
        fetchIt();
    }, []);

    const handleSearch = async () => {
        
         let sDate = date;
         sDate = sDate.toISOString().split('T')[0];
         
        setLoading(true);

        const response = await FuelApiData.response(sDate);
        const gold = response.data.result.sort((a, b) => a.tankNo - b.tankNo);
        setDateTitle(date);
        setLoading(false);


        setMockDatas(gold);

        // console.log(response.data);
        

    };

   
    return (
        <ScrollView style={styles.container}>
            {loading && <LoadingIndicator/>}
            <Text style={{
                fontSize: 24,
                color: 'white',
                marginBottom: 30,
                fontWeight: 200,
                paddingHorizontal: 20,
                marginTop: 10,
            }}>Fuel Balance Report</Text>
            <View style={{
                flexDirection: 'row',
                gap: 20,
                paddingHorizontal:20
            }}>
                 <View>
                <Text style={{
                    color: 'white',
                    fontWeight: 200,
                    marginBottom:5
                    
             }}>Start Date</Text>   

                <TouchableOpacity style={{
                    width:200
                }} onPress={()=>toggleDatePicker()}>
                <DatePicker value={fuelDate}/>
                </TouchableOpacity>
                </View>

                
            <View>
            <Text style={{
                marginBottom:4
            }}></Text>
            <SearchButton onPress={handleSearch} width={200} iconColor={'white'} color={'grey'} icon={'magnify'} title={"Search"}/>
            </View>
         </View>
            {
                showPicker && (
                <DateTimePicker
                mode='date'
                display='spinner'
                value={date}
                onChange={onChange}
            />  
            )
            }
            <Text style={{
                fontSize: 22,
                color: color.light,
                textAlign: 'center',
                fontWeight:'200'
            }}>Fuel Balance at {dateTitle?.toDateString()}</Text>
            
            <FuelBalanceTable item={mockDatas} />

        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor:color.bottomNavigation
    },
});

//make this component available to the app
export default FuelBalanceScreen;
