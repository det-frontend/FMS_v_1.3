import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/Screen";
import color from "../../config/color";
import defaultStyles from '../../config/styles';
import { useEffect, useState } from "react";
import DetailSale from '../../api/getDailySale';
import UploadToCloudTableDetail from "../../components/UploadToCloudTableDetail";
import LoadingIndicator from "../../components/Loading";
function UploadToCloud({ navigation }) {
const [okData, setOkData] = useState([]);
const [loading, setLoading] = useState(false);

    
  useEffect(()=>{
  const fetchIt = async () => {
      const response = await DetailSale.noneCloue();
      if (response?.data?.result) {
          console.table(response?.data?.result);
          setOkData(response?.data?.result);
      }
   };
    fetchIt();
  }, []);
    

    
  return (
      <>
    {
    okData?.length == 0 ? <LoadingIndicator/>:''
    }
    {
    loading ? <LoadingIndicator/>:''
    }
    <View style={{ flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height:'100%',
      alignItems:'center',
      backgroundColor: color.bottomNavigation,
      elevation: 30,
      }}>
  <ScrollView>
      <View style={styles.container}>
    <View style={{flexDirection:'row'}}>
        <View style={[defaultStyles.tableCell,{width:'10%'}]}>
      <Text style={defaultStyles.tableCellText}>Vocono</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'10%'}]}>
      <Text style={defaultStyles.tableCellText}>Sale Date Time</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'15%'}]}>
      <Text style={defaultStyles.tableCellText}>Vehicle No</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'19%'}]}>
      <Text style={defaultStyles.tableCellText}>Purpose of Use</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'5%'}]}>
      <Text style={defaultStyles.tableCellText}>Nozzle No</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'10%'}]}>
      <Text style={defaultStyles.tableCellText}>Fuel Type</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'7%'}]}>
      <Text style={defaultStyles.tableCellText}>Sale Liter</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'7%'}]}>
      <Text style={defaultStyles.tableCellText}>Sale Price</Text>
        </View>
        <View style={[defaultStyles.tableCell,{width:'7%'}]}>
      <Text style={defaultStyles.tableCellText}>Total Price</Text>
        </View>

        <View style={[defaultStyles.tableCell,{width:'10%'}]}>
      <Text style={defaultStyles.tableCellText}>Actions</Text>
        </View>
    </View>
    {
    okData.map((e, index) => <UploadToCloudTableDetail setOkData={setOkData} loading={loading} setLoading={setLoading}  key={`03_${index}`} item={e} />)
    }
   </View>
  </ScrollView>
   </View>
  </>
  )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        backgroundColor:"#2c3e50"
    }
})

export default UploadToCloud