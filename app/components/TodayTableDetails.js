import { 
    View,
    Text,
    ScrollView
} from 'react-native';
import defaultStyles from '../config/styles';

function TodayTableDetails({item,no}) {
  return (

      <View style={{ flexDirection: 'row' }}>  
          <View style={[defaultStyles.tableCell,{width:'3%'}]}>
              <Text style={defaultStyles.tableCellText}>{no}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'12.3%'}]}>
              <Text style={defaultStyles.tableCellText}>{item.vocono}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8.3%'}]}>
              <Text style={defaultStyles.tableCellText}>{item.dailyReportDate}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{item.carNo}</Text>
          </View>
            <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{item.vehicleType}</Text>
          </View>
            <View style={[defaultStyles.tableCell,{width:'5%'}]}>
              <Text style={defaultStyles.tableCellText}>{item.nozzleNo}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{item.fuelType}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{item.saleLiter}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{(item.saleLiter/4.16).toFixed(3)}</Text>
          </View>
           <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{(item.salePrice)}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{(item.totalPrice)}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{(item.totalizer_liter).toFixed(3)}</Text>
          </View>
          <View style={[defaultStyles.tableCell,{width:'8%'}]}>
              <Text style={defaultStyles.tableCellText}>{(item.totalizer_amount).toFixed(0)}</Text>
          </View>
    </View>        
  )
}




export default TodayTableDetails