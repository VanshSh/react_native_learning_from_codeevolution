
import { StyleSheet, View } from 'react-native'
import StylingRN from './components/StylingRN'

export default function App() {
  return (
    <View style={styles.padding20} >
      <StylingRN/>
    </View>
  )
}

const styles = StyleSheet.create({
  padding20: {
    padding:60
  }
})