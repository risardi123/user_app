import React, {useState, useEffect} from 'react'
import {View, TextInput} from 'react-native'
import Color from './Constant/Color';
import HeaderSecondary from './component/secondaryHeader';
import CellPhone from './component/CellPhone';
import {FlatList} from 'react-native';

const SearchUser = ({navigation, route}) => {
  const {params} = route
  const [search, setSearch] = useState("")
  const [searchResult, setResult] = useState([])

  useEffect(()=>{
    if(search && params){
      const clone = [...params]
      const results = clone.filter((value)=>{
        const {first_name} = value || {}
        return first_name.toLowerCase().includes(search.toLowerCase())
      })
      setResult(results)
    } else {
      setResult(params)
    }
  },[search, params, setResult])

  return(
    <HeaderSecondary title={"Search User"}
                     onPressLeft={()=>navigation.goBack()}>
      <>
        <View style={{flex: 0, backgroundColor: Color.color_one_500, height: 50, paddingVertical: 6, paddingHorizontal: 12}}>
          <TextInput style={{backgroundColor: Color.color_0}}
                     placeholder={"masukan kata kunci"}
                     onChangeText={(value)=>setSearch(value)}/>
        </View>
        <FlatList data={searchResult}
                  renderItem={(value, index)=>{
                    const {id, first_name, last_name, avatar, email} = value.item || {}
                    return(
                      <CellPhone key={index}
                                 id={id}
                                 firstName={first_name}
                                 lastName={last_name}
                                 photo={avatar}
                                 email={email}
                                 isReplace/>
                    )
                  }}/>
      </>
    </HeaderSecondary>
  )
}
export default SearchUser
