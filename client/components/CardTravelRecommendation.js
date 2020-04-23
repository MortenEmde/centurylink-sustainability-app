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
      <Card style={styles.card}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <FontAwesomeIcon
              icon={iconCheck()}
              style={styles.mainIcon}
              size={60}
            />
          </View>

          <View style={styles.pointsContainer}>
            <Text style={styles.pointText}>
              {' '}
              <FontAwesomeIcon
                icon={faHeartbeat}
                style={styles.heartIcon}
                size={30}
              />{' '}
              {journeyInfo.healthPoints}
            </Text>

            <Text style={styles.pointText}>
              <FontAwesomeIcon
                icon={faLeaf}
                style={styles.leafIcon}
                size={30}
              />{'  '}
              {journeyInfo.sustainabilityPoints}
            </Text>
          </View>
          <View style={styles.clockContainer}>
            <Text>
              <FontAwesomeIcon
                icon={faClock}
                style={styles.clockIcon}
                size={30}
              />
            </Text>
            <Text style={styles.clockText}>{journeyInfo.time}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  pointText: {
    fontSize: 25,
  },
  clockText: {
    fontSize: 13,
  },
  card: {
    padding: 0,
    margin: 0,
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  pointsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  clockContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  heartIcon: {
    color: 'red',
  },
  leafIcon: {
    color: 'green',
  },
  clockIcon: {
    color: 'black',
    marginBottom: 10,
  },
  mainIcon: {
    color: 'black',
  },
});


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
