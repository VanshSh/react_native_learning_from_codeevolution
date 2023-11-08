import { SafeAreaView, StyleSheet, View } from 'react-native'
import StylingRN from './components/StylingRN'
import ListsRN from './components/ListsRN'

export default function App() {
  return (
    <SafeAreaView style={styles.padding20}>
      {/* <StylingRN/> */}
      <ListsRN />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  padding20: {
    padding: 60,
  },
})
