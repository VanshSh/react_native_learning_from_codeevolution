import { SafeAreaView, StyleSheet, View } from 'react-native'
import StylingRN from './components/StylingRN'
import ListsRN from './components/ListsRN'
import RNFormsComponents from './components/RNFormsComponents'
import RNForm from './components/RNForm'
import RNNetworking from './components/RNNetworking'

export default function App() {
  return (
    <SafeAreaView style={styles.padding20}>
      {/* <StylingRN/> */}
      {/* <ListsRN /> */}
      {/* <RNFormsComponents /> */}
      {/* <RNForm/> */}
      <RNNetworking />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  padding20: {
    padding: 60,
  },
})
