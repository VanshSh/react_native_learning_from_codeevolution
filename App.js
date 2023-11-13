import { SafeAreaView, StyleSheet, View } from 'react-native'
import StylingRN from './components/StylingRN'
import ListsRN from './components/ListsRN'
import RNFormsComponents from "./components/RNFormsComponents"
import RNForm from "./components/RNForm"


export default function App() {
  return (
    <SafeAreaView style={styles.padding20}>
      {/* <StylingRN/> */}
      {/* <ListsRN /> */}
      {/* <RNFormsComponents /> */}
      <RNForm/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  padding20: {
    padding: 60,
  },
})
