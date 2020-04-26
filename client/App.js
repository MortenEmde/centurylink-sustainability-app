import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import JourneyPlanner from './components/JourneyPlanner';
import PreferenceButton from './components/PreferenceButton';
import ContainerTravelRecommendation from './components/ContainerTravelRecommendation'

export default function App() {
  const [preference, setPreference] = useState('star');

  const sortItems = newPreference => {
    setPreference(newPreference);
  }

  return (
    <View style={styles.container}>
      <JourneyPlanner />
      <View style={styles.preferenceButtons}>
        <PreferenceButton type="star" sortItems={sortItems} />
        <PreferenceButton type="environment" sortItems={sortItems} />
        <PreferenceButton type="health" sortItems={sortItems}  />
        <PreferenceButton type="time" sortItems={sortItems}  />
      </View>
      <View style={styles.listContainer}>
        <ContainerTravelRecommendation preference={preference} />
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
    marginTop: 10,
  },
  // TBC styles
  listContainer: {},
});
