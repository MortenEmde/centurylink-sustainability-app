import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JourneyPlanner from './components/JourneyPlanner';
import Cycling from './components/Cycling';

export default function App() {
  return (
    <View style={styles.container}>
      <JourneyPlanner />
      <Cycling />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
