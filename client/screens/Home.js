import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import JourneyPlanner from '../components/JourneyPlanner';
import PreferenceButton from '../components/PreferenceButton';
import ContainerTravelRecommendation from '../components/ContainerTravelRecommendation'

const Home = ({ navigation }) => {
  const [preference, setPreference] = useState('star');

  const sortItems = (newPreference) => {
    setPreference(newPreference);
  };

  return (
    <View style={styles.container}>
      <View style={styles.journeyPlanner}><JourneyPlanner /></View>
      <View style={styles.preferenceButtons}>
        <PreferenceButton type="star" sortItems={sortItems} />
        <PreferenceButton type="health" sortItems={sortItems} />
        <PreferenceButton type="environment" sortItems={sortItems} />
        <PreferenceButton type="time" sortItems={sortItems} />
      </View>
      <View style={styles.listContainer}>
        <ContainerTravelRecommendation
          preference={preference}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#b6d688',
    alignItems: 'center',
  },
  preferenceButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  journeyPlanner: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  // TBC styles
  listContainer: {},
});

export default Home;
