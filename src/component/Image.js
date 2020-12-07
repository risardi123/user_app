import React from 'react'
import{
  View,
  Image
}from 'react-native'
import {DeviceWidth} from '../Constant/Constant';
const calculateWidth = DeviceWidth * 0.3
const ComponentImage = (props) =>{
  const {photo} = props
  return(
    <View style={{flex: 1, height: calculateWidth, width: calculateWidth, borderRadius: DeviceWidth * 0.3, backgroundColor: 'lightgray'}}>
      <Image source={{uri: photo || null}}
             style={{flex: 1, borderRadius: calculateWidth, height: calculateWidth, width: calculateWidth,}}/>
    </View>
  )
}
export default ComponentImage
