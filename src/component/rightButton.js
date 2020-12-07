import React from 'react'
import {TouchableOpacity, View} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import Color from '../Constant/Color';

const RightButton = (props) =>{
  const {onPressRight} = props
  return(
    <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
      <TouchableOpacity style={{borderRadius: 50, marginRight: 6, padding: 4}}
                        onPress={onPressRight}>
        <Foundation name={'magnifying-glass'}
                    size={24}
                    color={Color.color_0}/>
      </TouchableOpacity>
    </View>
  )
}
export default RightButton
