import React from 'react'
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const CellPhone = (props) => {
  const {index, photo, firstName, lastName, isReplace, email, id} = props
  const navigation = useNavigation()
  return(
    <View key={index}
          style={{flex: 1, margin: 8, padding: 8, borderBottomWidth: 1, borderColor: 'lightgray'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image style={{width: 50, height: 50, borderRadius: 50, marginRight: 12, backgroundColor: 'lightgray'}}
               source={{uri: photo || null}}/>
        <TouchableOpacity style={{flex: 1}}
                          onPress={()=>{
                            isReplace ?
                              navigation.replace("Detail", props)
                              :
                              navigation.push("Detail", props)

                          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {`${firstName} ${lastName}`}
          </Text>
          <Text>
            {email}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default CellPhone
