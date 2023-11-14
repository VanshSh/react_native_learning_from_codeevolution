import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import React from 'react'
import CourseScreen from './screens/CourseScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import Ionicons from '@expo/vector-icons/Ionicons'
import { AboutStack } from './AppStack'

const Tab = createBottomTabNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //   tabBarShowLabel: false,
          tabBarLabelPosition: 'below-icon',
          tabBarActiveTintColor: 'purple',
        }}
      >
        <Tab.Screen
          name='Course List'
          component={CourseScreen}
          options={{
            tabBarLabel: 'Course List',
            tabBarIcon: () => <Ionicons name={'list'} size={20} />,
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarLabel: 'My Profile',
            tabBarIcon: () => <Ionicons name={'person'} size={20} />,
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'My Settings',
            tabBarIcon: () => <Ionicons name={'settings'} size={20} />,
          }}
        />
        <Tab.Screen
          name='About Stack'
          component={AboutStack}
          options={{
            tabBarLabel: 'About Stack',
            tabBarIcon: () => <Ionicons name={'list'} size={20} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
