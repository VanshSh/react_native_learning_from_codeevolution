import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StylingRN() {
  return (
    <View>
      <View>
        <Text style={[styles.border, styles.container]}>
          Styling in React native
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginHorizontal: 20,
    padding: 20,
    width: ' 90%',
    textAlign: 'center',
  },
  border: {
    borderRadius: 10,
    color: 'yellow',
  },
})

// Border Radius => Does not work on Text in the IOS but works on Android. So to apply the border radius on in IOS apply it on the View component.

// Box shadown does not work on Android. But androidElevation in the alternative for the box shadow in the Android

// In react native there is no inheritance from View Tag to the Text tag

// View has display flex by default