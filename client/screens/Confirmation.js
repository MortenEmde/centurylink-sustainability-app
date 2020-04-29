import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeartbeat, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { Card } from 'react-native-elements';

const Confirmation = () => {
  return (
    <View style={styles.container}>
    <Card >
      <View style={styles.card}> 
      <Text style={styles.text}>Your points are pending...</Text>
      <View style={styles.mainPoints}>
        <View style={styles.pointsRow}>
          <FontAwesomeIcon
            icon={faHeartbeat}
            style={styles.heartIcon}
            size={40}
          />
          <Text style={styles.pointsText}>+{5}</Text>
        </View>
        <View style={styles.pointsRow}>
          <FontAwesomeIcon icon={faLeaf} style={styles.leafIcon} size={40} />
          <Text style={styles.pointsText}>+{11}</Text>
        </View>
      </View>
      <FontAwesomeIcon style={styles.smileIcon} icon={faSmile} color={'#3b8348'} size={90} />
      <Text style={styles.text}>Have a nice Journey!</Text>
      </View>
    </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b6d688',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 30,
  },
  mainPoints: {
    flexDirection: 'row',
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  pointsText: {
    fontSize: 50,
    marginTop: 10,
  },
  leafIcon: {
    color: 'green',
    marginRight: 10,
  },
  heartIcon: {
    color: 'red',
    marginRight: 10,
  },
  smileIcon: {
    marginBottom: 15,
  },
})

export default Confirmation;

