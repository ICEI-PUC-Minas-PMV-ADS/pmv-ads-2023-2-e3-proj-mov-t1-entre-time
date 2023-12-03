import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Register from '../pages/Register'
import Login from '../pages/Login'

const Stack = createNativeStackNavigator()

const Auth = () => {
  return (
   <Stack.Navigator inicialRouteName="Login">
    <Stack.Screen name="Login" component={Login} options={{header:()=> null}}/>
     <Stack.Screen name="Register" component={Register} options={{header:()=> null}}/>
   </Stack.Navigator>
  )
}

export default Auth