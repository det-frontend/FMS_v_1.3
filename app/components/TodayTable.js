//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import defaultStyles from '../config/styles';
import TodayApi from '../api/getDailySale';
import TodayTableDetails from './TodayTableDetails';
import LoadingIndicator from './Loading';
import color from '../config/color';
import Button from './Button';


// create a component
const TodayTable = () => {
    const [todayData, setTodayData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalPageNo, setTotalPageNo] = useState(0);
    const [totalDataCount, setTotalDataCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [sDate, setSDate] = useState(new Date());
    const [eDate, setEDate] = useState(new Date());
    
    useEffect(() => { 
    const fetchIt = async () => {
   let ssDate = sDate;
   let eeDate = eDate;

        ssDate = new Date(ssDate);
        eeDate = new Date(eeDate);


        // Get the date in the format: yyyy-mm-ddT00:00:00.000Z
        const formattedSDate = ssDate.toISOString().split('T')[0] + 'T00:00:00.000Z';
        const formattedEDateTime = eeDate.toISOString().split('T')[0] + 'T23:59:59.999Z';
    

        setLoading(true);
        const response = await TodayApi.todayDetailSale(1, formattedSDate, formattedEDateTime);
        const totalCount = response.data.totalCount;
        const pagNo = Math.ceil(parseInt(totalCount) / 50);

        setTotalPageNo(pagNo);
        setTotalDataCount(totalCount);
            
        setTodayData(response.data.result);
        setLoading(false);
    }
        fetchIt();
    }, []);

    useEffect(() => { 

        console.log("this is change", pageNo)
        
        const fetchIt = async (pageNo) => {
            console.log(pageNo);

    let ssDate = sDate;
    let eeDate = eDate;

        ssDate = new Date(ssDate);
        eeDate = new Date(eeDate);


        // Get the date in the format: yyyy-mm-ddT00:00:00.000Z
        const formattedSDate = ssDate.toISOString().split('T')[0] + 'T00:00:00.000Z';
        const formattedEDateTime = eeDate.toISOString().split('T')[0] + 'T23:59:59.999Z';
            

            setLoading(true);
            const response = await TodayApi.todayDetailSale(pageNo, formattedSDate, formattedEDateTime);
            setTodayData(response.data.result);
            setLoading(false);
        }

        fetchIt(pageNo);
    }, [pageNo]);


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
        <>
            {
                loading && <LoadingIndicator/>
            }
           <View style={styles.container}>
               <View style={{ flexDirection: 'row' }}>  
         <View style={[defaultStyles.tableCell,{width:'3%'}]}>
              <Text style={defaultStyles.tableCellText}></Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'12.3%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Vocono</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8.3%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Sale Date Time</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Vehicle No</Text>
          </View>
            <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText,]}>Purpose of Use</Text>
          </View>
            <View style={[defaultStyles.tableCell,{width:'5%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Noz Num</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Fuel Type</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Sale Liter</Text>
          </View>
           <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Sale Gallon</Text>
              </View> 
              <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Sale Price</Text>
              </View> 
               <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Total</Text>
          </View> 
            <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Totalizer Liter</Text>
          </View>  
            <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={[defaultStyles.tableCellText]}>Totalizer Amount</Text>
          </View>        
            </View>   
            {
             todayData.map((data,index)=><TodayTableDetails item={data} no={parseInt(index + 1)}/>)
            }
            </View>
            <Text style={{
                fontSize: 16,
                color: color.white,
                fontWeight:'100',
                marginTop: 20,
                marginRight:10
            }}>Total Count - ({totalDataCount})</Text>
                  <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
              
                <Button color={color.activeColor} onPress={handlePrev} title={"< Previous"} width={10} />
                <Text style={{
                    color: 'white',
                    backgroundColor: color.activeColor,
                    padding:14.5,
                    display: 'flex',
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: color.bottomActiveNavigation,
                    borderWidth:1,
                    marginBottom:-9.5
                }}>{pageNo}</Text>
                <Button color={color.activeColor} onPress={handleNext} title={"Next >"} width={10} />
            </View>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TodayTable;
