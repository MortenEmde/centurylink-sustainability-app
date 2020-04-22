import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle, faWalking, faCarSide, faShuttleVan, faStar, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';


const CardTravelRecommendation = () => {
  
  return (
    <View>
      <Card containerStyle={{ padding: 0 }}>
        {cycling.map((u, i) => {
          return (
            <View>
              <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].duration.text}</Text>
              <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].distance.value}</Text>
              <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].duration.value}</Text>
            </View>
          );
        })}
      </Card>
    </View>
  );
}

export default CardTravelRecommendation
