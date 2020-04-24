import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CardTravelRecommendation from './CardTravelRecommendation';

const ContainerTravelRecommendation = () => {
  const [journeyData, setJourneyData] = useState([]);

  const fetchData = async () => {
    const unparsedData = await fetch('http://localhost:5000/api', {
      method: 'POST',
    });
    const data = await unparsedData.json();
    setJourneyData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const travelOptionCheck = (travelOption) => {
    if (travelOption) {
      return travelOption;
    }
  };

  return (
    <View>
      <View>
        <FlatList
          keyExtractor = {item => item.method}
          data={journeyData}
          renderItem={(travelOption) => (
            <View style={styles.container}>
              <CardTravelRecommendation
                style={styles.card}
                journeyInfo={travelOptionCheck(travelOption.item)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

// TBC styles
const styles = StyleSheet.create({
  container: {},
  card: {},
});

export default ContainerTravelRecommendation;
