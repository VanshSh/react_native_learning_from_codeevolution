import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function AboutScreen({ navigation, route }) {
  const { name } = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        style={styles.button}
        title='Update Params'
        onPress={() =>
          navigation.setParams({
            name: 'Vansh Coder',
          })
        }
      />
      <Button
        style={styles.button}
        title='Back to Home'
        onPress={() =>
          navigation.navigate('Home', {
            result: 'Vansh Coder',
          })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
