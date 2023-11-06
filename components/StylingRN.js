import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform,
} from 'react-native'
import React from 'react'

// const windowWidth = Dimensions.get('window').width
// const windowHeight = Dimensions.get('window').height

export default function StylingRN() {
  const windowWidth = useWindowDimensions().width
  const windowHeight = useWindowDimensions().height
  console.log('😇 L-18 in StylingRN.js=> ', windowHeight, windowWidth)
  return (
    <SafeAreaView

    >
      <View>
        <View>
          <Text style={[styles.border, styles.container]}>
            Styling in React native
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    marginHorizontal: 20,
    padding: Platform.OS === 'android' ? 50 : 0,
    width: '90%',
    textAlign: 'center',
  },
  border: {
    borderRadius: 10,
    ...Platform.select({
      ios: {
        color: 'white',
      },
      android: {
        color: 'yellow',
      },
    }),
  },
})
