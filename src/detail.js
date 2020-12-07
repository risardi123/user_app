import React, {useEffect, useState} from 'react'
import{
  View,
  Text,
  ScrollView
}from 'react-native'
import HeaderSecondary from './component/secondaryHeader';
import ComponentImage from './component/Image';
import get_user_detail from './fetchCollection/get_user_detail';
import LoadingBlocker from './component/loadingBlocker';
const Detail = ({navigation, route}) => {
  const {params} = route
  const {id} = params
  const [data, setData] = useState({})
  const [reFetch, setReFetch] = useState(true)
  useEffect(()=>{
    if(reFetch){
      get_user_detail(id).then((value)=>{
        if(value.data){
          setReFetch(false)
          setData(value.data)
        }
      })
    }
  },[reFetch, get_user_detail])
  const {first_name, last_name, email, avatar} = data.data || {}
  const {text} = data.support || {}
  return(
    <HeaderSecondary title={"Detail User"}
                     onPressLeft={()=>navigation.goBack()}
                     renderStaticBody={reFetch ? <LoadingBlocker/> : undefined}>
      <ScrollView>
        <View style={{paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}>
          <View style={{flex: 1, paddingVertical: 16, justifyContent: 'center', alignItems: 'center'}}>
            <ComponentImage photo={avatar}/>
          </View>
          <View style={{paddingHorizontal: 12,flex: 1, alignItems: 'center', marginBottom: 8}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>{`${first_name || ""} ${last_name || ""}`}</Text>
          </View>
          <View style={{paddingHorizontal: 12, flex: 1, alignItems: 'center', marginBottom: 12}}>
            <Text style={{fontSize: 16}}>{email || ""}</Text>
          </View>
        </View>
        <View style={{flex: 1, paddingHorizontal: 12, paddingBottom: 12}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', paddingVertical: 8}}>Profile</Text>
          <Text style={{fontSize: 14}}>
            {text}
          </Text>
        </View>
      </ScrollView>
    </HeaderSecondary>
  )
}
export default Detail
