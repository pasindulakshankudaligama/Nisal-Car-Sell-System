import { View, Text } from 'react-native'
import React from 'react'
import Login from './screens/Login'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
    </NavigationContainer>
  
  )
}
