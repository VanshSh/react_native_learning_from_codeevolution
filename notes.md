### Learning **Notes**

---

- Border Radius => Does not work on Text in the IOS but works on Android. So to apply the border radius on in IOS apply it on the View component.

- Box shadown does not work on Android. But androidElevation in the alternative for the box shadow in the Android

- In react native there is no inheritance from View Tag to the Text tag

- Dimensions API

  - const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height

- View has display flex by default
- For Platform specific code for small usecases:

  ```
  ...Platfrom.select({
  ios:{},
  android:{}
   })

   OR

   Platfrom.OS === 'android' ? "red" : "green"

  ```

- Platform specific code for big usecases:
  - Create files with the extensions
    - file.android.js
    - file.ios.js
    - Import it as usual component without extensions RN will figure that out

# Video 51 Lists

- Using normal map method and ScrollView will render all the components of the List in one go which will make our app slow and code is not optimized.
- To solve this we use **FlastList**

# View 52 FlatList

```
<FlatList
data={data}
renderItem = {({item})=>{
  return (
    <h1>{item.title}</h1>
  )
}}
keyExtractor = {item.key}
     or
keyExtractor = {(item,index)=> item.id.toString()}

/>

```
- ItemSeperatorComponent is used to seperate items
- ListEmptyComponent is used to show the element when the list is empty
- ListHeaderComponent to show data on the to of the list
- ListFooterComponent to show data on the footer of the list
  

## Video 53 SectionList
```
   <SectionList
        sections={groupedPokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )
        }}
        renderSectionHeader={({ section }) => {
          return <Text style={styles.sectionHeaderText}>{section.type}</Text>
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 12,
              backgroundColor:"red"
            }}
          />
        )}
        SectionSeparatorComponent={() => (
          <View
            style={{
              height: 12,
              backgroundColor:"yellow"
            }}
          />
        )}
      />
```

- If you want to seperate the list on the basis of subcategories then use SectionList 


## Video 58 TextInput

``` 
<TextInput
        style={styles.input}
        value={username}
              onChangeText={setUsername}
              //   secureTextEntry
              placeholder='Write your name'
              keyboardType='default'
              autoCapitalize='none'
              autoCorrect={false}

      />
  
  ```


- TextInput is used to take the value from the username or any kind of data
  
## Video 59 multiLine

```
    <TextInput
        style={[styles.multiLineText, styles.input]}
        placeholder='Write your message'
        keyboardType='default'
        autoCapitalize='none'
        autoCorrect={false}
      />
```

- Jusst add `multiline` as the prop for the TextInput
 
```

    <TextInput
        style={[styles.multiLineText, styles.input]}
        placeholder='Write your message'
        keyboardType='default'
        autoCapitalize='none'
        autoCorrect={false}
        multiline
      />

```

- Used as the textarea of the web

## Video 61 Switch

```
  <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
          trackColor={{ false: 'red', true: 'green' }}
          thumbColor={isDarkMode ? 'yellow' : '#f4f3f4'}
        />

```  

- Integrating toggle functionality in your app.

## Video 62 Forms

```
 <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        style={styles.container}
      >
      <!-- CODE... -->
      </KeyboardAvoidigView>

```

- Use `KeyboardAvoidingView` for handling the keyboard interaction.
  

## Video 66 Networking

- Refreshing

```

  const handleRefresh = () => {
    setrefreshing((prev) => !prev)
    fetchData(20)
    setrefreshing((prev) => !prev)
  }

     <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{ item.id}: {item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
```

## Video 72 React Native Navigation using (React Navigation)

- Read more here : https://reactnavigation.org/docs/getting-started

- Stack Navigation (AppStack.js)
  - Here screens work likes the deck of the cards.
  - Two Navigatiors:
    - Stack Navigator
      - It is JS Based Navigation and provides high degree of customisation but comes at the cost of the performance.
    - Native Stack Navigator
      - It is based on the native navigation and provides better performance and animations but with limited customization.
  - Native Stack Navigator
    - Install:  `npm install @react-navigation/stack`
    - App.js :
   
       ```
       import { createNativeStackNavigator } from '@react-navigation/native-stack'

        const Stack = createStackNavigator()
       
       <Stack.Navigator initialRouteName='About'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
      </Stack.Navigator>
      
      ```
    - `  // const navigation = useNavigation()` can be used with any component not specific to the screen components.
    - For all screen components, use {navigation} props
    ```
    <Button title="Back to Home" onPress={()=>navigation.navigate("Home")}/>
    ```
    - Passing values between screens
      
      ```  
      <Button
        title='Go to About'
        onPress={() =>
          navigation.navigate('About', {
            name: 'Vansh Sharma',
          })
        }
      />

      OR

        <Stack.Screen
          name='About'
          component={AboutScreen}
          initialParams={{
            name: 'Guest login',
          }}
        />

      const { name } = route.params

      ```
    - Attributes: 
    ```
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
    ```

## Video 78 Drawer Navigation (AppDrawer.js)

- Read more here: https://reactnavigation.org/docs/drawer-navigator

```
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import React from 'react'
import CourseScreen from './screens/CourseScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'
import Ionicons from '@expo/vector-icons/Ionicons'

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
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App


```