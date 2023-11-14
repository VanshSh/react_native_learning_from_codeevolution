import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { View, Text } from 'react-native'
import React from 'react'
import DashboardScreen from './screens/DashboardScreen'
import SettingsScreen from './screens/SettingsScreen'

const App = () => {
  const Drawer = createDrawerNavigator()
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Dashboard'
          component={DashboardScreen}
          options={{
            title: 'My dashboard',
            drawerLabel: 'Dashboard label',
            drawerActiveTintColor: '#333',
            drawerActiveBackgroundColor: 'lightblue',
            drawerContentStyle: {
              backgroundColor: '#c6cbef',
            },
          }}
        />
        <Drawer.Screen name='Settings' component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
