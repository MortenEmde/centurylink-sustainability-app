import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle, faWalking, faCarSide, faShuttleVan, faStar, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';


const CardTravelRecommendation = async () => {

  const unparsedData = await fetch('http://localhost:5000/api') 
  const data = await unparsedData.json();
  
  return (
    <View>
      <Card containerStyle={{ padding: 0 }}>
        <View>
          <Text style={{ marginBottom: 10 }}>{data.cyclingObject.cyclingDurationText}</Text>
          <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].distance.value}</Text>
          <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].duration.value}</Text>
        </View>
      </Card>
    </View>
  );
}

const cyclingObject = { cyclingDurationText, cyclingDistanceValue, cyclingDurationValue };

export default CardTravelRecommendation
