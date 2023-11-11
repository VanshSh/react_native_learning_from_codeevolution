import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  SectionList,
} from 'react-native'
import pokemonList from '../data.json'
import groupedPokemonList from '../grouped-data.json'

export default function ListsRN() {
  return (
    <SafeAreaView styles={styles.container}>
      {/* <FlatList
        data={pokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item.type}</Text>
              <Text style={styles.cardText}>{item.name}</Text>
            </View>
          )
        }}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={
          <View
            style={{
              height: 16,
            }}
          />
        }
        ListEmptyComponent={<Text>No Items Found</Text>}
        ListHeaderComponent={
          <Text style={styles.headerText}>Pokemon List</Text>
        }
        ListFooterComponent={<Text style={styles.footerText}>End of list</Text>}
        // horizontal={true}
      /> */}
      <SectionList
        sections={groupedPokemonList}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.cardText}>{item}</Text>
            </View>
          )
        }}
        renderSectionHeader={({ section }) => {
          return <Text style={styles.sectionHeaderText}>{section.type}</Text>
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 12,
              backgroundColor:"red"
            }}
          />
        )}
        SectionSeparatorComponent={() => (
          <View
            style={{
              height: 12,
              backgroundColor:"yellow"
            }}
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    // marginBottom: 16,
    borderWidth: 1,
  },
  cardText: {
    fontSize: 30,
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
  sectionHeaderText: {
    backgroundColor: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
