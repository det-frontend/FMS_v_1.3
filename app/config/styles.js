import color from "./color"


export default {
    color,
    tableCell: {
        width:100,
        backgroundColor: color.bottomNavigation,
        fontSize: 10,
        height:35,
        borderWidth: 0.4,
        borderColor: '#535c68',
        padding: 5, 
        display: 'flex',
        alignItem: 'center',
        justifyContent:'center'

    },
    tableCellText: {
        color: color.light,
        fontSize: 10,
        fontWeight:'100',
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Avenir",
        textAlign: 'center',
        lineHeight:20
    }
}