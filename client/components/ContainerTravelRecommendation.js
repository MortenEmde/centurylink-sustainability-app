import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardTravelRecommendation from './CardTravelRecommendation';

const ContainerTravelRecommendation = async () => {
// use hooks to avoid infinite loop?
  const unparsedData = await fetch('http://localhost:5000/api', {method: 'POST'}) 
  const data = await unparsedData.json();
  console.log(data);

  const endResult = async () => {
    return Promise.all(data.map((item, index) => 
    <CardTravelRecommendation key={index} journeyInfo={item.time}/>))
  }
  return (
    <View>
      {await endResult()}
    </View>
  )
}

const styles = StyleSheet.create({})

export default ContainerTravelRecommendation