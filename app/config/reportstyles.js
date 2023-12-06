import color from "./color"
import fonts from "./fonts"


export default {
    color,
    fonts,
    card: {
        backgroundColor: color.bottomActiveNavigation,
        height: 180,
        width: 200,
        padding: 30,
        elevation: 50,
        alignItems: 'center',
        justifyContent:'center',
        gap: 30,
        flexDirection: 'column',
        backgroundColor: color.bottomActiveNavigation,
        borderRadius: 15,
        position: 'relative',
        overflow:'hidden'
    },
    image: {
        width: 70,
        height: 70,
    },
    text: {
        color: color.light,
        fontWeight: '300',
        fontSize: fonts.subHeaderSmall,
        marginTop:5,
    },
    cardBottom: {
        backgroundColor: '#2d323d',
        width: '145%',
        height: 50,
        bottom:0,
        position: 'absolute',
        
        
    }
}