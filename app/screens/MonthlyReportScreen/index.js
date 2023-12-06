//import liraries
import React, {useState,useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,TouchableOpacity,Image } from 'react-native';
import color from '../../config/color';
import LoadingIndicator from '../../components/Loading';
import TodayTable from '../../components/TodayTable';
import TodayApi from '../../api/getDailySale';

const datas = [
    {
        title: 1,
        id: 1,
        subTitle: 'Total Sale',
        image:require('../../../assets/total.png')
    },
    {
        title: 2,
        id: 2,
        subTitle: 'Total Fuel (Li)',
        image:require('../../../assets/bucket.png')
    },
    {
        title: 3,
        id: 3,
        subTitle: 'Total Fuel Gallon',
        image:require('../../../assets/gallon.png')
    },
];


const hello = [
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


const customers = [
  {
    customerName: 'Ko Thiha',
    customerId:121212
  },
  {
    customerName: 'Ko Tun',
    customerId:212121
  },
  {
    customerName: 'Ko Zaw',
    customerId:131313
  },
  {
    customerName: 'Ko Maung',
    customerId:313131
  },
  {
    customerName: 'Ko Lat',
    customerId:141414
  },
  {
    customerName: 'Ko Chit',
    customerId:414141
  },
  {
    customerName: 'Ma Zar',
    customerId:151515
  },
  {
    customerName: 'Ko Tun Aung',
    customerId:515151
  },
  {
    customerName: 'Ko Aung Kyaw',
    customerId:161616
  },
  {
    customerName: 'Ko Pesi',
    customerId:6161616
  },
  {
    customerName: 'Ko Kyaw Zay ',
    customerId:171717
  },
  {
    customerName: 'Ko Thiha',
    customerId:717171
  },
  {
    customerName: 'Ko Zay Ye Maung',
    customerId:181818
  },
  {
    customerName: 'Ko Aye Chan',
    customerId:81818
  },
  
]


const tableData = [
    {   id:1,
        user_id: '11111',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:2,
        user_id: '22222',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:3,
        user_id: '33333',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:4,
        user_id: '44444',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:5,
        user_id: '55555',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:6,
        user_id: '66666',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:7,
        user_id: '77777',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:8,
        user_id: '88888',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:9,
        user_id: '99999',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
    {   id:10,
        user_id: '10101',
        user_name: 'User One',
        get_date: '23/7/20023',
        credit: '100000',
        deposit: '1450000',
        statement: '3029309',
        balance: '34232324',
    },
];




let startDate = new Date();
startDate = startDate.toLocaleDateString();

let endDate = new Date();
endDate = endDate.toLocaleDateString();


// create a component
const MonthlyReportScreen = () => {
    const [customer, setCustomer] = useState(customers[0]);
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [sDate, setSDate] = useState(new Date());
    const [eDate, setEDate] = useState(new Date());
     const [showEndPicker, setShowEndPicker] = useState(false);
    const [fuelStartDate, setFuelStartDate] = useState(startDate);
    const [fuelEndDate, setFuelEndDate] = useState(endDate);
    const [cardInfos, setCardInfos] = useState({
        totalSale: '',
        totalFuelLi: '',
        totalFuelGal: '',
    });
    const [totalDebt, setTotalDebt] = useState(0);
    const [loading, setLoading] = useState(false);
    const [debtTableDatas, setDebtTableDatas] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalPageNo, setTotalPageNo] = useState(1);
    const [totalDataCount, setTotalDataCount] = useState(0);

  
   
    useEffect(() => {
        let totalDebt = 0;
        const fetchIt = async () => {

    let ssDate = sDate;
    let eeDate = eDate;

        ssDate = new Date(ssDate);
        eeDate = new Date(eeDate);


        // Get the date in the format: yyyy-mm-ddT00:00:00.000Z
        const formattedSDate = ssDate.toISOString().split('T')[0] + 'T00:00:00.000Z';
        const formattedEDateTime = eeDate.toISOString().split('T')[0] + 'T23:59:59.999Z';
    

        setLoading(true);
            const response = await TodayApi.todayTotal(formattedSDate, formattedEDateTime);

            let total = 0;
            let totalLiter = 0;


            response.data.result.map((obj) => {
                 total += obj.totalPrice;
                totalLiter += obj.saleLiter;
            });

            setCardInfos({
                totalSale: total,
                totalFuelLi:totalLiter.toFixed(3)
            }
            )
            
            setLoading(false);

        };

        fetchIt();
    }, []);

 




    return (
        <>
            {
                loading && <LoadingIndicator/>
            }
         <ScrollView >
        {/* <View style={{
            flexDirection:'row',
            display:'flex',
            alignItems:'center',
            justifyContent:'space-around',
            flexWrap:'wrap',
            marginBottom: 30,
            marginTop:30
        }}>
        <View>
                <Text style={{
                    color: 'white',
                    fontWeight: 200,
                    marginBottom:5
                    
             }}>Start Date</Text>   

                <TouchableOpacity style={{
                    width:200
                }} onPress={()=>toggleStartDatePicker()}>
                <DatePicker value={fuelStartDate}/>
                </TouchableOpacity>
                </View>
                 {
                showStartPicker && (
                <DateTimePicker
                mode='date'
                display='spinner'
                value={sDate}
                onChange={onChangeStart}
            />  
            )
            }
        <View>
                <Text style={{
                    color: 'white',
                    fontWeight: 200,
                    marginBottom:5
                    
             }}>End Date</Text>   

                <TouchableOpacity style={{
                    width:200
                }} onPress={()=>toggleEndDatePicker()}>
                <DatePicker value={fuelEndDate}/>
                </TouchableOpacity>
                </View>
                 {
                showEndPicker && (
                <DateTimePicker
                mode='date'
                display='spinner'
                value={eDate}
                onChange={onChangeEnd}
            />  
            )
            }
         
                <View style={{
                   paddingTop:10,
                    width:300
                }}>
                       <Button width={100}  onPress={handleSearch} title={"Search"}/>
        </View>
       
        </View> */}
                <Text style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: '100',
                    color: 'white',
                    marginTop: 20,
                    marginBottom:20
        }}>Today Total Sale and Liters</Text>
        <View style={{
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'row',
            width:'100%',
            flexWrap:'wrap',
            gap:20,
        }}>
         <View style={styles.container}>
            <Text style={styles.text}>Today Total Sale</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap:30
            }}>
                <Text style={styles.sale}>
                                {
                                    cardInfos.totalSale.toLocaleString(undefined, { maximumFractionDigits: 3 })
                    } MMK
                </Text>
                  <Image style={{
                width: 50,
                height:50
            }} source={require('../../../assets/total.png')} />
           </View>
        </View>
         <View style={styles.container}>
            <Text style={styles.text}>Today Total Liter</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap:30
            }}>
                <Text style={styles.sale}>
                    {
                        cardInfos.totalFuelLi
                    } Li
                </Text> 
                  <Image style={{
                width: 50,
                height:50
            }} source={require('../../../assets/bucket.png')} />
           </View>
        </View>
         {/* <View style={styles.container}>
                        <Text style={styles.text}>Total Gallon </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap:30
            }}>
                <Text style={styles.sale}>
                                {
                                    cardInfos.totalFuelGal
                    } Gallon
                </Text>
                  <Image style={{
                width: 50,
                height:50
            }} source={require('../../../assets/gallon.png')} />
           </View>
        </View> */}
         </View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'light',
                    marginLeft: 20,
                    color: color.white,
                    marginBottom:20
        }}>Today Latest Daily Sale Reports</Text>
        <TodayTable/>
        </ScrollView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: 150,
        backgroundColor: '#4b6584',
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
export default MonthlyReportScreen;
