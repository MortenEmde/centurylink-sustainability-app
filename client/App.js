import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JourneyPlanner from './components/JourneyPlanner';
import Cycling from './components/Cycling';
import Walking from './components/Walking';
import AllTransport from './components/AllTransport';

export default function App() {
  return (
    <View style={styles.container}>
      <JourneyPlanner />
      <Cycling />
      <Walking />
      <AllTransport />
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
