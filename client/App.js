import React from 'react';
import { StyleSheet, View } from 'react-native';
import JourneyPlanner from './components/JourneyPlanner';
import PreferenceButton from './components/PreferenceButton';
// import ListGen from './components/tempResults';
import ContainerTravelRecommendation from './components/ContainerTravelRecommendation'

export default function App() {
  return (
    <View style={styles.container}>
      <JourneyPlanner />
      <View style={styles.preferenceButtons}>
        <PreferenceButton type="star" />
        <PreferenceButton type="environment" />
        <PreferenceButton type="health" />
        <PreferenceButton type="time" />
      </View>
      <View style={styles.listContainer}>
        <ContainerTravelRecommendation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  preferenceButtons: {
    flexDirection: 'row',
  },
  listContainer: {
    
  }
});
