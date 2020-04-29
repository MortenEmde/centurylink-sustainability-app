import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CardTravelRecommendation from './CardTravelRecommendation';

const ContainerTravelRecommendation = ({ preference, navigation, origin, destination }) => {
  const [journeyData, setJourneyData] = useState([]);

  const fetchData = async (origin, destination) => {    
    const unparsedData = await fetch('http://localhost:5000/api', {
      method: 'POST',
      body: JSON.stringify(origin, destination),
    });
    const data = await unparsedData.json();
    setJourneyData(data);
  };

  useEffect(() => {
    fetchData(origin, destination);
  }, [origin, destination]);

  const travelOptionCheck = (travelOption) => {
    if (travelOption) {
      return travelOption;
    }
  };

  const sortFunction = (a, b, preference) => {
    if (preference === 'star') {
      return (
        b.healthPoints +
        b.sustainabilityPoints -
        (a.healthPoints + a.sustainabilityPoints)
      );
    }
    if (preference === 'time') {
      return a.timeValue - b.timeValue;
    }
    if (preference === 'environment') {
      return b.sustainabilityPoints - a.sustainabilityPoints;
    }
    return b.healthPoints - a.healthPoints;
  };

  return (
    <View style={styles.flatListContainer}>
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
    </View>
  );
};

// TBC styles
const styles = StyleSheet.create({
  flatListContainer: {},
});

export default ContainerTravelRecommendation;
