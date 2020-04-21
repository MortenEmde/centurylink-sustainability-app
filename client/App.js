import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JourneyPlanner from './components/JourneyPlanner';

export default function App() {
  return (
    <View style={styles.container}>
      <JourneyPlanner />
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
