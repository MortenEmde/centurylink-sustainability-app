import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardTravelRecommendation from './CardTravelRecommendation';

const ContainerTravelRecommendation = async () => {
  const [journeyData, setJourneyData] = useState([]);
  const fetchData = async () => {
    const unparsedData = await fetch('http://localhost:5000/api', {method: 'POST'}) 
    const data = await unparsedData.json();
    console.log('fetcheddata', data)
    setJourneyData(data);
  }

  useEffect(() => {
    fetchData();
  }, [journeyData]);

  console.log(journeyData);

  // const endResult = async () => {
  //   return await Promise.all(data.map((item, index) => 
  //     <CardTravelRecommendation key={index} journeyInfo={item.time}/>))
  // }

  const endResult = async () => {
    return <CardTravelRecommendation journeyInfo={journeyData[0]}/>
  }

  return (
    <View>
      {console.log('endResult', await endResult())}
      {await endResult()}
    </View>
  )
}

const styles = StyleSheet.create({})

export default ContainerTravelRecommendation