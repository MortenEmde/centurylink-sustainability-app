import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import CardTravelRecommendation from './CardTravelRecommendation';

const ContainerTravelRecommendation = ({
  preference,
  navigation,
  origin,
  destination,
}) => {
  const [journeyData, setJourneyData] = useState([]);
  const ip = require('../ip.json');

  const fetchData = async () => {
    const unparsedData = await fetch(`http://${ip.local}:5000/api`, {
      method: 'POST',
      body: JSON.stringify({ origin, destination }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await unparsedData.json();
    setJourneyData(data);
  };

  useEffect(() => {
    if (origin !== '' && destination !== '') {
      fetchData(origin, destination);
    }
  }, [origin, destination]);

  const travelOptionCheck = (travelOption) => {
    if (travelOption) {
      return travelOption;
    }
  };

  const sortFunction = (a, b, pref) => {
    if (pref === 'star') {
      return (
        b.healthPoints +
        b.sustainabilityPoints -
        (a.healthPoints + a.sustainabilityPoints)
      );
    }
    if (pref === 'time') {
      return a.timeValue - b.timeValue;
    }
    if (pref === 'environment') {
      return b.sustainabilityPoints - a.sustainabilityPoints;
    }
    return b.healthPoints - a.healthPoints;
  };

  return (
    <SafeAreaView style={styles.flatListContainer}>
      <FlatList
        style={styles.journeyList}
        data={journeyData.sort((a, b) => sortFunction(a, b, preference))}
        keyExtractor={(_, index) => index.toString()}
        extraData={preference}
        renderItem={(travelOption) => (
          <CardTravelRecommendation
            journeyInfo={travelOptionCheck(travelOption.item)}
            navigation={navigation}
          />
        )}
      />
    </SafeAreaView>
  );
};

// TBC styles
const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    marginBottom: 230,
  },
  journeyList: {},
});

export default ContainerTravelRecommendation;
