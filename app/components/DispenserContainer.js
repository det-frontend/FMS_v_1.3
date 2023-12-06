import React, { useEffect, useRef, useState } from 'react'
import { View,TouchableOpacity,Text } from 'react-native'
import Card from './Card'
import Paho from 'paho-mqtt';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../config/color';
import WholeRequestApi from '../api/wholereq';
import LoadingIndicator from './Loading';
import autoPermit from '../api/autoPermit';


function DispenserContainer({
  onPress,
  setVisible,
  setSelectedCards,
  selectedCards,
  dispenserCards,
  setFetchNew,
  setPriceChange
}) {

  
  const [nozzle1FuelDetail, setNozzle1FuelDetail] = useState({
    liter: 0,
    price:0
  });
  const nozzle1FuelDetailRef = useRef({ liter: '', price: '' });
  const [nozzle1PermitRecord, setNozzle1PermitRecord] = useState(0);
  const [noMorePermit, setNoMorePermit] = useState(null);
  const permitRef = useRef({
    nozzle:''
  });
  const [finalData, setFinalData] = useState(0);
  const [allDone, setAllDone] = useState('');
  const [liveData, setLiveData] = useState();
  const checkLiveRef = useRef({
    nozzle: ''
  });
  const [liveDispenser, setLiveDispenser] = useState(undefined);
   const [liveDespenserHistory, setLiveDespenserHistory] = useState([]);
  const liveDespenserHistoryRef = useRef(liveDespenserHistory);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [permitd, setPermitd] = useState(false);
  const regex = /[A-Z]/g;

  const [payloadHistory, setPayloadHistory] = useState([]);
  const payloadHistoryRef = useRef(payloadHistory);

  const [readyDespenserHistory, setReadyDespenserHistory] = useState([]);
  const readyDespenserHistoryRef = useRef(readyDespenserHistory);
  
  useEffect(() => {
    payloadHistoryRef.current = payloadHistory
  }, [payloadHistory]);

  useEffect(() => {
    readyDespenserHistoryRef.current = readyDespenserHistory
  }, [readyDespenserHistory]);

  
  function onMessage(message) {

    if (message.destinationName.startsWith('detpos/device/permit/') && /[1-8]$/.test(message.destinationName)) {
    const prefix = message.payloadString.substring(0,2); // "01"
        
        
    const topicCount = payloadHistoryRef.current.filter((t) => t === parseInt(prefix)).length;
    if (topicCount < 2) {
     setPayloadHistory((prevTopics) => [...prevTopics,parseInt(prefix)]);
    } 
        setNoMorePermit('hhh');
   }

    if (message.destinationName === 'detpos/local_server') {
      const prefix = message.payloadString.substring(0, 2); // "01"
      setAllDone(prefix);
      // setFetchNew((prev)=>!prev)
    }


    if (message.destinationName === 'detpos/device/price') {
      setPriceChange(true);
   }
   
    if (message.destinationName === 'detpos/local_server/mode') {
      if (message.payloadString === "allow") {
        setPermitd(true);
      } else if (message.payloadString === "manual") {
        setPermitd(false);
     }
   }


    if (message.destinationName === 'detpos/local_server/price_change') {
      setPriceChange(true);
    }
    

     if (message.destinationName.startsWith('detpos/local_server') && /[1-8]$/.test(message.destinationName)) {
      const prefix = message.payloadString.substring(0, 2); // "01"


      const topicCount = readyDespenserHistoryRef.current.filter((t) => t === parseInt(prefix)).length;
    if (topicCount < 1) {
     setReadyDespenserHistory((prevTopics) => [...prevTopics,parseInt(prefix)]);
    } 
    }
    
    
    // console.log(message.payloadString)
     
    // console.log(message.payloadString, message.destinationName);


  if (message.destinationName === 'detpos/device/whreq') {
       const topicCount = liveDespenserHistoryRef.current.filter((t) => t == message.payloadString).length;
    if (topicCount < 2) {
     setLiveDespenserHistory((prevTopics) => [...prevTopics,message.payloadString]);
    } 
   }


  if (message.destinationName === 'detpos/device/req') {
        const prefix = message.payloadString.substring(0,2); // "01"
        const suffix = message.payloadString.substring(2); // "cancel"

    setNoMorePermit(prefix);
    };
    
  if (message.destinationName.startsWith('detpos/device/Final/') && /[1-8]$/.test(message.destinationName)) {
    let data = message.payloadString.split(regex);
    setFinalData(data[0]);
  }
    
    
    
    if (message.destinationName.startsWith('detpos/device/livedata/') && /[1-8]$/.test(message.destinationName)) {
  
   
    let data = message.payloadString.split(regex);
       const updatedNozzle1FuelDetail = {
        liter: data[1],
        price: data[2],
        nozzleNo: data[0]
       };
      
      const checkLive = {
        nozzleNo: data[0]
      }
      
      checkLiveRef.current = {
        ...checkLiveRef.current,
        ...checkLive
      }
      
      nozzle1FuelDetailRef.current = {
        ...nozzle1FuelDetailRef.current,
        ...updatedNozzle1FuelDetail
      };
      }
      
   

  }


  //192.168.0.100
  //9001

  useEffect(() => {
    client = new Paho.Client(
      '192.168.0.100',
      Number(9001), // this has to be a port using websockets
      `android-${parseInt(Math.random() * 100)}`
    );

    
    mqtt_option = {
      onSuccess: () => {
        client.subscribe('detpos/device/#');
        client.subscribe('detpos/local_server/#')
        console.log("Mqtt is Connected");
      },
      onFailure: (err) => { console.log(err) },
      userName: 'detpos',
      password: 'asdffdsa',
      useSSL: false,
    };

    client.connect(mqtt_option);
    client.onMessageArrived = onMessage

  }, [refresh]);

  useEffect(() => {
    const fetchIt = async () => {
      const result = await autoPermit.getPermit();
      if (result.data) {
        if (result.data.result) {
          if (result.data.result.mode === 'allow') {
            setPermitd(true);
          } else if (result.data.result.mode === "manual") {
            setPermitd(false);
          }
        } 
      }
    }
    
    fetchIt();
  },[refresh])
  
  useEffect(() => {
    let ok = finalData;
    setFinalData(ok);
  }, [finalData])

  console.log(1);
  const handleReq = async () => {
    setLiveDespenserHistory([]);
    setLoading(true);
    const response = await WholeRequestApi.requests();
    setRefresh((prev)=>!prev)
    setLoading(false);
  }


  const reload = async () => {
    setRefresh((prev)=>!prev)
  }

 
  return (
    <>
      {
        loading && <LoadingIndicator/>
      }
      <View style={{
        width: '100%',
        height: '75%',
    }}>
        <View style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center',
          gap: 20,
          marginTop:5
        }}>
        <TouchableOpacity onPress={handleReq}>
        <Text style={{
         backgroundColor: color.activeColor,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width:100,
        padding:5,
        fontSize:12,
        marginLeft: 'auto',
        marginRight:'auto',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight:'300',
        marginBottom:5
      }}>Connect <MaterialCommunityIcons size={12} name='refresh-circle'/></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reload}>
         <Text style={{
       backgroundColor: color.activeColor,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        width:100,
        padding:5,
        fontSize:12,
        marginLeft: 'auto',
        marginRight:'auto',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight:'300',
        marginBottom:5
      }}>Reload<MaterialCommunityIcons size={12} name='reload'/></Text>
     </TouchableOpacity>
    </View>
    <View style={{
            position:'relative',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 10,
            height:"90%",
            justifyContent:'center'
      }}>
          {
          permitd? <View style={{
          position:'absolute',
          top:0,
          left:0,
          right:0,
          bottom:0,
          opacity: 0.5,
          backgroundColor:color.bottomNavigation,
          zIndex:999,
        }}></View>:''
       }
        {
          dispenserCards.map((obj, index) => (
            <Card
              setFetchNew={setFetchNew}
              nozzle1PermitRecord={nozzle1PermitRecord}
              setNozzle1PermitRecord={setNozzle1PermitRecord}
              selectedCards={selectedCards}
              setSelectedCards={setSelectedCards}
              payloadHistory={payloadHistory}
              setPayloadHistory={setPayloadHistory}
              title={obj.nozzle_no}
              nozzle1FuelDetail={nozzle1FuelDetailRef}
              obj={obj}
              id={index}
              active={payloadHistory.includes(parseInt(obj.nozzle_no))}
              setVisible={setVisible}
              key={index} 
              onPress={onPress}
              noMorePermit={noMorePermit}
              permitOfNozzles={permitRef}
              finalData={finalData}
              allDone={allDone}
              liveData={liveData == obj.nozzle_no ? liveData : undefined}
              setLiveData={setLiveData}
              setFinalData={setFinalData}
              setAllDone={setAllDone}
              checkLiveRef={checkLiveRef}
              liveDispenser={liveDispenser}
              approve={readyDespenserHistory.includes(parseInt(obj.nozzle_no))}
              setApprove={setReadyDespenserHistory}
              liveDespenserHistory={liveDespenserHistory.includes(obj.dep_no)}
            />
          )
          )
        }
      </View>
    </View>
    </>
  )
}

export default DispenserContainer