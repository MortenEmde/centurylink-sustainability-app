import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
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
      <JourneyPlanner />
      <View style={styles.preferenceButtons}>
        <PreferenceButton type="star" sortItems={sortItems} />
        <PreferenceButton type="environment" sortItems={sortItems} />
        <PreferenceButton type="health" sortItems={sortItems} />
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

export default Home;