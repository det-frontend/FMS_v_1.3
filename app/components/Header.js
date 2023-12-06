import {
    View,
    StyleSheet,
    Text
}from 'react-native'

function Header() {
  return (
      <View style={styles.container}>
          <Text>hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor:'#fff'
    }
})

export default Header