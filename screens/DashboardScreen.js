import { View, Text, StyleSheet, Button } from 'react-native'

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello Dashboard</Text>
      <Button
        style={styles.button}
        title='Open Drawer'
        onPress={() => navigation.toggleDrawer()}
      />
      <Button
        style={styles.button}
        title='Go to settings'
        onPress={() => navigation.jumpTo('Settings')}
      />
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap:20
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    marginVertical:200
  }
})
