import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './home';
import Detail from './detail';
import SearchUser from './searchUser';


const Stack = createStackNavigator()
const Root = () =>{
  return(
    <Stack.Navigator initialRouteName={"Home"}
                     screenOptions={{
                       headerShown: false
                     }}>
      <Stack.Screen name={"Home"} component={Home}/>
      <Stack.Screen name={"SearchUser"} component={SearchUser}/>
      <Stack.Screen name={"Detail"} component={Detail}/>
    </Stack.Navigator>
  )
}

const Route = () => {
  return(
    <NavigationContainer>
      <Root/>
    </NavigationContainer>
  )
}
export default Route
