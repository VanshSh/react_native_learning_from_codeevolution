import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function StylingRN() {
  return (
    <View>
      <View>
        <Text style={[styles.border, styles.container]}>Styling in React native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    padding: 20,
  },
  border: {
    borderRadius: 10,
    color: 'yellow', 
  },
});
