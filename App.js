import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      {/* <ListsRN /> */}
      {/* <StylingRN/> */}
      {/* <RNFormsComponents /> */}
      {/* <RNForm/> */}
      {/* <RNNetworking /> */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          initialParams={{
            result: 'Guest ',
          }}
        />
        <Stack.Screen
          name='About'
          component={AboutScreen}
          initialParams={{
            name: 'Guest login',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
