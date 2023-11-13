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

## Video 61 Swicth

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

- 