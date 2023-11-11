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
} from 'react-native'

const LoginForm = () => {
  const [username, setUsername] = useState('')
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

  return (
    // <KeyboardAvoidingView
    //   behavior="padding"
    //   keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    //   style={styles.container}
    // >
    //   <View style={styles.form}>
    //     <Image
    //       source={require("./assets/adaptive-icon.png")}
    //       style={{
    //         width: 200,
    //         height: 400,
    //         alignSelf: "center",
    //         marginBottom: 50,
    //       }}
    //     />
    //     <Text style={styles.label}>Username</Text>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Enter your username"
    //       value={username}
    //       onChangeText={setUsername}
    //     />
    //     {errors.username ? (
    //       <Text style={styles.errorText}>{errors.username}</Text>
    //     ) : null}

    //     <Text style={styles.label}>Password</Text>
    //     <TextInput
    //       style={styles.input}
    //       placeholder="Enter your password"
    //       value={password}
    //       onChangeText={setPassword}
    //       secureTextEntry
    //     />
    //     {errors.password ? (
    //       <Text style={styles.errorText}>{errors.password}</Text>
    //     ) : null}

    //     <Button title="Login" onPress={handleSubmit} />
    //   </View>
    // </KeyboardAvoidingView>
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
        placeholder='Write your message'
        keyboardType='default'
        autoCapitalize='none'
        autoCorrect={false}
        multiline
      />
      <Text style={styles.text}>My name is {username}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
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
    minHeight: 100,
    textAlignVertical: 'top',
  },
})

export default LoginForm
