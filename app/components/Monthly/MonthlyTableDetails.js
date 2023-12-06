import { View, Text, StyleSheet } from 'react-native'
import color from '../../config/color';

export default function MonthlyTableDetails({item}) {
  return (
     <View style={{
                flexDirection: 'row',
                backgroundColor:color.bottomActiveNavigation
            }}>
            <View style={[styles.cell,{
                width: '12.5%',
                alignItems:'flex-start'}]}>
                <Text style={[styles.text,{
                    fontSize:12
                }]}>{item.couObjId.cou_id}</Text>
            </View>   
            <View style={[styles.cell,{
                width: '12.5%',
                alignItems:'flex-start'}]}>
                <Text style={[styles.text,{
                    fontSize:12
                }]}>{item.vocono}</Text>
            </View>   
            <View style={[styles.cell,{
                width: "12.5%",
                alignItems: 'flex-start',
           }]}>
                <Text style={[styles.text,{
                    fontSize:12
                }]}>{item.couObjId.cou_name}</Text>
            </View>   
            <View style={[styles.cell,{
                width: '12.5%',
                alignItems: 'flex-start',
           }]}>
                <Text style={[styles.text,{
                    fontSize: 12,
                }]}>{item.dateOfDay}</Text>
            </View>   
            <View style={[styles.cell,{
                width: '12.5%',
                alignItems:'flex-end'
           }]}>
                <Text style={[styles.text]}>{item.credit == 0? '----':`+ ${item.credit}`}</Text>
            </View>   
            <View style={[styles.cell,{
               width:'12.5%',
               alignItems:'flex-end'
           }]}>
                <Text style={[styles.text]}>{item.deposit == 0? "----":`- ${item.deposit}`}</Text>
            </View>   
            <View style={[styles.cell,{
               width:'12.5%',
               alignItems:'flex-end'
           }]}>
                <Text style={styles.text}>{item.statement}</Text>
            </View>   
            <View style={[styles.cell,{
               width:'12.5%',
               alignItems: 'flex-end',
           }]}>
                <Text style={styles.text}>{item.balance}</Text>
            </View>   
            </View>
  )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    cell: {
         borderWidth:0.5,
        borderColor:'grey',
        justifyContent: 'center',
        padding: 5,
        height:50
    },
    text: {
        color:'#dfe4ea'
    }
});
