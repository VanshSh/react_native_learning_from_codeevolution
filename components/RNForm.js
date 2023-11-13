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
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}
    if (!userName) errors.userName = 'Name must not be empty !'
    if (!password) errors.password = 'Password must not be empty !'
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleFormSubmit = () => {
    if (validateForm()) {
      console.log('😇 L-29 in RNForm.js=> ', userName, password)
      setUserName('')
      setPassword('')
      setErrors({})
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 50}
      style={styles.container}
    >
      <View style={styles.form}>
        <Image
          source={require('../assets/adaptive-icon.png')}
          style={styles.image}
        />
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your name...'
          value={userName}
          onChangeText={setUserName}
        />
        {errors.userName ? (
          <Text style={styles.errorText}>{errors.userName}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your password..'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}

        <Button title='Login' onPress={handleFormSubmit} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center', // Adjust this based on your layout needs
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
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: 'center',
    marginBottom: 20,
  },
})

export default LoginForm
