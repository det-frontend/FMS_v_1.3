
//import liraries
import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import color from '../../config/color';
import FuelReceiveApi from '../../api/getFuelReceive';
import LoadingIndicator from '../../components/Loading';
import FuelInTable from '../../components/FuelIn/FuelInTable';

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
const FuelInReportScreen = () => {
    const [mockDatas, setMockDatas] = useState(datas);
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [fuelDate, setFuelDate] = useState(startDate);
    const [loading, setLoading] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const [totalPageNo, setTotalPageNo] = useState(0);
    const [totalDataCount, setTotalDataCount] = useState(0);



    useEffect(() => {
        let currentDate = new Date(date);
        currentDate = currentDate.toLocaleDateString();

        setFuelDate(currentDate);
    }, [date]);

   

    useEffect(() => {
        const fetchIt = async () => {
            setLoading(true);
             

            const response = await FuelReceiveApi.fuelReceive(1);


            console.log(response.data)
            setLoading(false);
            const totalCount = response.data.totalCount;
            const pagNo = Math.ceil(parseInt(totalCount) / 50);
            setTotalPageNo(pagNo);
            setTotalDataCount(parseInt(response.data.totalCount));
        
        
            setMockDatas(response.data.result);
        };

        fetchIt();
    }, []);

    useEffect(() => {

         const fetchIt = async (pageNo) => {
            setLoading(true);
             

             const response = await FuelReceiveApi.fuelReceive(pageNo);
             

            setLoading(false);
            setTotalDataCount(parseInt(response.data.totalCount));
        
        
            setMockDatas(response.data.result);
        };

        fetchIt(pageNo);
    },[pageNo])

    const handleNext = () => {
        if (totalPageNo === pageNo) return;

            
            setPageNo((prev) => prev + 1);
    };

    const handlePrev = () => { 
        if (pageNo == 1) {
            setPageNo(1);
        } else {
            setPageNo((prev) => prev - 1);
        }
    };




   
    return (
        <ScrollView style={styles.container}>
            {loading && <LoadingIndicator/>}
            {/* <Text style={{
                marginTop:34,
                fontSize: 18,
                color: color.light,
                textAlign: 'center',
                fontWeight:'200'
            }}>Fuel In Receive at {dateTitle?.toDateString()}</Text> */}
            <Text style={{
                fontSize: 24,
                color: color.light,
                marginTop: 20,
                fontWeight: '100',
            }}>Fuel In Report</Text>
            
            <FuelInTable totalDataCount={totalDataCount} handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo} item={mockDatas} />

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
export default FuelInReportScreen;
