import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
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

  // const endResult = async () => {
  //   return await Promise.all(data.map((item, index) =>
  //     <CardTravelRecommendation key={index} journeyInfo={item.time}/>))
  // }

  const endResult = (travelOption) => {
    if (travelOption) {
      //return <CardTravelRecommendation journeyInfo={journeyData} />;
      console.log('travelOption:', travelOption);
      return travelOption;
    }
  };

  return (
    <View>
      <View>
        <FlatList
          data={journeyData}
          renderItem={(travelOption) => (
            <View style={styles.container}>
              <CardTravelRecommendation
                style={styles.card}
                journeyInfo={endResult(travelOption.item)}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

/* 
<FlatList 
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
      /> */
const styles = StyleSheet.create({
  container: {},
  card: {},
});

export default ContainerTravelRecommendation;
