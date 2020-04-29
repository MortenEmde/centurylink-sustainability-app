import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  onPress,
} from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBicycle,
  faWalking,
  faCarSide,
  faTrain,
  faLeaf,
  faHeartbeat,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const CardTravelRecommendation = ({ journeyInfo, navigation }) => {
  const iconCheck = () => {
    if (journeyInfo.method === 'cycling') {
      return faBicycle;
    } else if (journeyInfo.method === 'walking') {
      return faWalking;
    } else if (journeyInfo.method === 'driving') {
      return faCarSide;
    } else if (journeyInfo.method === 'transit') {
      return faTrain;
    }
  };

  const screenCheck = (method) => {
    switch (method) {
      case 'cycling':
        return 'Cycling';
      case 'walking':
        return 'Walking';
      case 'driving':
        return 'Driving';
      case 'transit':
        return 'Public Transport';
      default:
        return '';
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push(screenCheck(journeyInfo.method))}
      >
        <Card style={styles.card}>
          <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
              <FontAwesomeIcon
                icon={iconCheck()}
                style={styles.mainIcon}
                size={60}
              />
            </View>

            <View style={styles.subContainer}>
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
                />
                {'  '}
                {journeyInfo.sustainabilityPoints}
              </Text>
            </View>
            <View style={styles.subContainer}>
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
      </TouchableOpacity>
    </View>
  );
};

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
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  heartIcon: {
    color: 'red',
  },
  leafIcon: {
    color: '#3b8348',
  },
  clockIcon: {
    color: 'black',
    marginBottom: 10,
  },
  mainIcon: {
    color: 'black',
  },
});

export default CardTravelRecommendation;
