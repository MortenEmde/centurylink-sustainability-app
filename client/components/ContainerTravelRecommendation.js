import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardTravelRecommendation from './CardTravelRecommendation';

const ContainerTravelRecommendation = () => {
  const [journeyData, setJourneyData] = useState([]);

  const fetchData = async () => {
    const unparsedData = await fetch('http://localhost:5000/api', {method: 'POST'}) 
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

  const endResult = () => {
    if (journeyData.length !== 0) {
      return <CardTravelRecommendation journeyInfo={journeyData} />;
    }
  };

  return (
    <View>
      {console.log('journeyData', journeyData)}
      {endResult()}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContainerTravelRecommendation;