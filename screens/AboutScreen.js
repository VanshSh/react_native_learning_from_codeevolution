import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function AboutScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button title="Back to Home" onPress={()=>navigation.navigate("Home")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
