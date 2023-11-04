import { StatusBar } from 'expo-status-bar'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native'

export default function App() {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 25,
      }}
    >
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
      </View>
      <View>
        <ActivityIndicator size="large" color="red" animating />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})
