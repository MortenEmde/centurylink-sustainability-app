import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle, faWalking, faCarSide, faShuttleVan, faStar, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';

const CardTravelRecommendation = ({ journeyInfo }) => {
  const iconCheck = () => {
  if (journeyInfo.method === 'cycling') {
    return faBicycle
  } else if (journeyInfo.method === 'walking') {
    return faWalking
  } else if (journeyInfo.method === 'driving') {
    return faCarSide
  }
}

  return (
    <View>
      <Card containerStyle={{ padding: 0, width: 300 }}>
        <View>
          <FontAwesomeIcon icon={iconCheck()} size={35}/>
          <Text style={{ marginBottom: 10 }}>  <FontAwesomeIcon icon={faClock} size={15}/>{journeyInfo.time}</Text>
          <Text style={{ marginBottom: 10 }}> <FontAwesomeIcon icon={faHeartbeat} size={15}/>{journeyInfo.healthPoints}</Text>
          <Text style={{ marginBottom: 10 }}> <FontAwesomeIcon icon={faLeaf} size={15}/>{journeyInfo.sustainabilityPoints}</Text>
        </View>
      </Card>
    </View>
  );
}
// [
//   {
//       "method": "cycling",
//       "time": "34 mins",
//       "timeValue": 2018,
//       "healthPoints": 3,
//       "sustainabilityPoints": 4
//   },
//   {
//       "method": "walking",
//       "time": "2 hours 2 mins",
//       "timeValue": 7296,
//       "healthPoints": 10,
//       "sustainabilityPoints": 7
//   },
//   {
//       "method": "driving",
//       "time": "11 mins",
//       "timeValue": 665,
//       "healthPoints": 5,
//       "sustainabilityPoints": 5
//   }
// ]


export default CardTravelRecommendation
