import {
    Text
} from 'react-native';



function AppText({children,color = '#000',fontSize = 12,fontWeight,...otherProps}) {
  return (
      <Text
          style={{
          color,
          fontSize,
          fontWeight,
          }}
       {...otherProps}
      >{children}</Text>
  )
}

export default AppText