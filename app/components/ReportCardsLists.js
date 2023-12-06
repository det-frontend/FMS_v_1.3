import {View,Text,Image} from 'react-native'
import color from '../config/color'
import defaultStyles from '../config/reportstyles';
import ReportsCard from './ReportsCard';
import fonts from '../config/fonts';


function ReportCardsLists({ navigation, reports,title = "Reports" }) {
  return (
      <>
      <View style={{
              backgroundColor: color.bottomNavigation,
              flex:1,        
      }}>
      <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginTop:20,
          width: '100%',
          marginLeft: 'auto',
          marginRight:'auto'
      }}>
     {
              reports.map((report, index) => (
                  <ReportsCard index={index} route={report.route} navigation={navigation} key={index} image={report.image} name={report.name} status={report.status} />
              ))
     }
    </View>   
     </View>
      </>
  )
}

export default ReportCardsLists