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
      <Stack.Navigator initialRouteName='About'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
