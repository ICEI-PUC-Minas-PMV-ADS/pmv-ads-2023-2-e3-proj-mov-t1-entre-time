import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';

// import Main from '../navigations/Main';
import UserProvider from './contexts/UserContext'

import Route from './navigations/Route';

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