import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import AboutScreen from './screens/AboutScreen'
import { Pressable, Text } from 'react-native'

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      {/* <ListsRN /> */}
      {/* <StylingRN/> */}
      {/* <RNFormsComponents /> */}
      {/* <RNForm/> */}
      {/* <RNNetworking /> */}
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#E5D4FF',
          },
          headerTintColor: '#363062',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Pressable onPress={() => alert('Menu Pressed')}>
              <Text>Menu</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: '#192655',
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          initialParams={{
            result: 'Guest ',
          }}
          options={{
            title: 'Welcome Home',
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
