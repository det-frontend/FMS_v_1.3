import React from 'react'
import {View} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import AppTextInput from './AppTextInput'
import color from '../config/color'
function SearchBar({onSearch}) {
  return (
      <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
          paddingHorizontal: 20,
          marginBottom: 30,
          elevation: 50,
          backgroundColor:color.bottomActiveNavigation
          
    }}>
          <AntDesign name='search1' size={30} color="white" />
          <AppTextInput width={90} onSearch={onSearch} placeholder="Search User Name & Id"/>
    </View>
  )
}

export default SearchBar