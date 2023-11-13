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
  const [password, setpassword] = useState('')
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
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
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder='Enter your password..'
            secureTextEntry
            value={password}
            onChangeText={setpassword}
          />
          <Button title='Login' onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 30,
      backgroundColor: 'red',
      borderRadius: 10,
    //   justifyContent: 'center', // Adjust this based on your layout needs
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
