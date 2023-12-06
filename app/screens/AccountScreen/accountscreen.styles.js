import { StyleSheet } from 'react-native';
import color from '../../config/color';
import fonts from '../../config/fonts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: color.bottomNavigation,
        flex: 1,
        padding:20
    },
    image: {
        borderRadius:200,
        backgroundColor: '#58B19F',
        width: 120,
        height: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 50,
        shadowColor:'#182C61'
    },
    text: {
          color: 'white',
          fontSize: fonts.header,
          fontWeight:"200"
      }
});