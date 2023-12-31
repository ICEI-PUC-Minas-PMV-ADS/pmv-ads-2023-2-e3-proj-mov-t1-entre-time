import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

//import Main from './src/navigations/Main';
import UserProvider from './src/contexts/UserContext'

import Route from './src/navigations/Route';

const App = () => {

  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  )
}

export default App