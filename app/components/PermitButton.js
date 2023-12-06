import { Switch, Text, TouchableOpacity,View } from "react-native"
import color from "../config/color";
import { useState } from "react";

const PermitButton = ({ text,open,handleClick }) => {
  const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return (
      <View style={{
          marginVertical: 30,
          display: 'flex',
          flexDirection: 'row',
          gap:20,
      }}>
    <Text  style={{
       backgroundColor: open?color.activeColor:color.bottomActiveNavigation,
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        fontSize:16,
        fontWeight:'bold',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight:'300',
        marginBottom:5,
      }}>{text}</Text>
       <Switch
        style={{
            transform:[{scale:1.5}]
        }}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={open ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleClick}
        value={open}
      />
      </View>
    )
}

export default PermitButton;