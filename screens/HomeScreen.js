import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen({ navigation, route }) {
  // const navigation = useNavigation()
  const {result}  = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen for {result}</Text>
      <Button
        title='Go to About'
        onPress={() => navigation.navigate('About')}
      />
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
