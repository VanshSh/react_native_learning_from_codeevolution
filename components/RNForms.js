import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Image,
  Platform,
  SafeAreaView,
  Switch,
} from 'react-native'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState)

  //   const [password, setPassword] = useState('')
  //   const [errors, setErrors] = useState({})

  //   const validateForm = () => {
  //     let errors = {}

  //     if (!username) errors.username = 'Username is required'
  //     if (!password) errors.password = 'Password is required'

  //     setErrors(errors)

  //     return Object.keys(errors).length === 0
  //   }

  //   const handleSubmit = () => {
  //     if (validateForm()) {
  //       console.log('Submitted', username, password)
  //       setUsername('')
  //       setPassword('')
  //       setErrors({})
  //     }
  //   }

  console.log('😇 L-44 in RNForms.js=> ', isDarkMode)
  return (
    <SafeAreaView style={styles.container}>
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
      <TextInput
        style={[styles.multiLineText, styles.input]}
        // style={styles.input}
        placeholder='Write your message'
        keyboardType='default'
        autoCapitalize='none'
        autoCorrect={false}
        multiline
      />
      <Text style={styles.text}>My name is {username}</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>Dark Mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleSwitch}
          trackColor={{ false: 'red', true: 'green' }}
          thumbColor={isDarkMode ? 'yellow' : '#f4f3f4'}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'yellow',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  form: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  multiLineText: {
     flexGrow:1.5,// Adjust this value based on your layout needs
    textAlignVertical: 'top',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
})

export default LoginForm
