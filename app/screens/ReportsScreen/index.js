import React from 'react'
import { ScrollView, Text } from 'react-native';
import Screen from '../../components/Screen';
import ReportCardsLists from '../../components/ReportCardsLists';


const reports = [
     {
        id: 1,
        image: require('../../../assets/priceChange.png'),
        name: 'Price Change',
        route: 'Price Change',
        status:true
    },
    {
        id: 2,
        image: require('../../../assets/customers.png'),
        name: 'Customers Info',
        route: 'Customer Info',
        status:false
    },
    {
        id: 3,
        image: require('../../../assets/outbox-upload-svgrepo-com.png'),
        name: 'Upload to Cloud',
        route: 'Upload to Cloud',
        status:true
    },
    {
        id: 4,
        image: require('../../../assets/update.png'),
        name: 'Update',
        route: 'Update',
        status:true
    },
];

function ReportScreen({navigation}) {
    return (
      <>
           <ReportCardsLists navigation={navigation} reports={reports} />
      </>
  )
}

export default ReportScreen