import React,{useEffect, useState} from 'react'
import{
  FlatList,
}from 'react-native'
import HeaderSecondary from './component/secondaryHeader';
import CellPhone from './component/CellPhone';
import RightButton from './component/rightButton';
import LoadingBlocker from './component/loadingBlocker';
import get_user from './fetchCollection/get_user';
const Home = ({navigation}) => {
  const [data, setData] = useState([])
  const [reFetch, setReFetch] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    if(reFetch){
      get_user().then((value)=>{
        setLoading(false)
        setReFetch(false)
        if(value){
          setData(value)
        }
      })
    }
  },[get_user, setData, reFetch])

  return(
    <HeaderSecondary title={"User"}
                     renderStaticBody={reFetch ? <LoadingBlocker/> : undefined}
                     renderRight={
                       data.length > 0 ?
                      <RightButton onPressRight={()=>navigation.push("SearchUser",data)}/>
                      : undefined
                     }>
      <FlatList data={data}
                renderItem={(value, index)=>{
                  const {id, first_name, last_name, avatar, email} = value.item || {}
                  return(
                    <CellPhone key={index}
                               id={id}
                               firstName={first_name}
                               lastName={last_name}
                               photo={avatar}
                               email={email}/>
                  )
                }}
                refreshing={reFetch}
                onRefresh={()=>{
                  setData([])
                  setReFetch(true)
                }}/>
    </HeaderSecondary>
  )
}
export default Home
