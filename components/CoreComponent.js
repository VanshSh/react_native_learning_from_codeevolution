import React from 'react'
import { ActivityIndicator, Alert, Button, Text, View } from 'react-native'
import Greet from './Greet'

const CoreComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 25,
      }}
    >
      <View>
        <ActivityIndicator size='large' color='red' animating />
      </View>
      <View>
        <Text
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 30,
          }}
        >
          Hello World!
        </Text>
        <Button
          title='Alert'
          onPress={() =>
            Alert.alert('Invalid data', 'Data Incorrext', [
              {
                text: 'Cancel',
                onPress: () => console.log('Canceled pressed'),
              },
              {
                text: 'OK',
                onPress: () => console.log('Ok pressed'),
              },
            ])
          }
        />
      </View>
      <Greet name='Vansh Sharma' />
      <Greet name='Himanshu Sharma' />
    </View>
  )
}

export default CoreComponent
