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
  const [refreshing, setrefreshing] = useState(false)
  const [postTitle, setpostTitle] = useState('')
  const [postBody, setpostBody] = useState('')
  const [isPosting, setisPosting] = useState(false)

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

  const handleRefresh = () => {
    setrefreshing((prev) => !prev)
    fetchData(20)
    setrefreshing((prev) => !prev)
  }

  const addPost = async () => {
    setisPosting((prev) => !prev)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        userId: Date.now(),
        id:Date.now()
      }),
    })
    const newPost = await response.json()
    setPostList([newPost, ...postList])
    setisPosting((prev) => !prev)
  }

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
      <>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Post title..'
            value={postTitle}
            onChangeText={setpostTitle}
          />
          <TextInput
            style={styles.input}
            placeholder='Post body..'
            value={postBody}
            onChangeText={setpostBody}
          />
          <Button
            title={isPosting ? 'Adding..' : 'Add Post'}
            onPress={addPost}
            disabled={isPosting}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={postList}
            renderItem={({ item }) => {
              return (
                <View style={styles.card}>
                  <Text style={styles.titleText}>
                    {item.id}: {item.title}
                  </Text>
                  <Text style={styles.bodyText}>{item.body}</Text>
                </View>
              )
            }}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            ListEmptyComponent={<Text>No Posts Found</Text>}
            ListHeaderComponent={
              <Text style={styles.headerText}>Post List</Text>
            }
            ListFooterComponent={
              <Text style={styles.footerText}>End of list</Text>
            }
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        </View>
      </>
    </SafeAreaView>
  )
}

export default RNNetworking
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE3BB',
    paddingTop: StatusBar.currentHeight ,
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
    backgroundColor: '#F1EAFF',
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
