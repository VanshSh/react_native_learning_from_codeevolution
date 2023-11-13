import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native'

const RNNetworking = () => {
  const [postList, setPostList] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    )
    const data = await response.json()
    setPostList(data)
    setisLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#363062' />
        <Text>Loading...</Text>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={postList}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.titleText}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            )
          }}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
          ListEmptyComponent={<Text>No Posts Found</Text>}
          ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
          ListFooterComponent={
            <Text style={styles.footerText}>End of list</Text>
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default RNNetworking
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE3BB',
    paddingTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#B4BDFF',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center', // Center the loading spinner
    alignItems: 'center', // Center the loading spinner
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#B4BDFF',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 20,
  },
  bodyText: {
    fontSize: 15,
    color: '#001B79',
  },
  nameText: {
    fontSize: 30,
  },
  typeText: {
    fontSize: 24,
    color: '#A3B763',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: '#860A35',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    borderRadius: 8,
  },
  errorContainer: {
    backgroundColor: '#ED5AB3',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: 'center',
  },
  errorText: {
    color: '#EBE3D5',
    fontSize: 16,
    textAlign: 'center',
  },
})
