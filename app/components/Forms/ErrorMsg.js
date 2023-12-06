import { Text } from "react-native-svg"
import AppText from "../AppText"
import { StyleSheet } from "react-native"
import color from "../../config/color";

function ErrorMsg({ error, visible }) { 
    if (!visible || !error) return null;
  return (
      <AppText fontSize={13} color={color.danger}>{error}</AppText>
  )
}

const styles = StyleSheet.create({

})

export default ErrorMsg