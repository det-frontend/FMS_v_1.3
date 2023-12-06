import color from "./color";
import fonts from "./fonts";


export default {
    color,
    fonts,
    container: {
          marginTop:-25,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',   
          backgroundColor: color.bottomActiveNavigation,
          borderRadius: 15,
          padding:10,
          elevation: 60,
          shadowColor:'black'
      },
    show: {
          width: 130,
          backgroundColor: color.bottomActiveNavigation,
          height: 130,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent:'center',
          elevation: 50,
          borderWidth:2,
          borderColor:color.activeColor
    },
    text: {
        color: color.light,
        fontSize:fonts.header,
        fontWeight: '300',
        fontSize:16
    }
}