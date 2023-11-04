import { StatusBar } from 'expo-status-bar'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})
