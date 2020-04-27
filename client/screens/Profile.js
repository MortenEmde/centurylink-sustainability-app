import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBicycle,
  faWalking,
  faCarSide,
  faShuttleVan,
  faLeaf,
  faHeartbeat,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          size={200}
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          showEditButton
        />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>Jane Doe</Text>
        <Text style={styles.department}>Department: Technology</Text>
      </View>
      <View style={styles.pointsRow}>
        <FontAwesomeIcon
          icon={faHeartbeat}
          style={styles.heartIcon}
          size={40}
        />
        <Text style={styles.pointsText}>{12}</Text>
      </View>
      <View style={styles.pointsRow}>
        <FontAwesomeIcon icon={faLeaf} style={styles.leafIcon} size={40} />
        <Text style={styles.pointsText}>{33}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  avatar: {
    marginTop: 60,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  userInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 50,
  },
  department: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'grey',
    marginBottom: 10,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    fontSize: 50,
  },
  leafIcon: {
    color: 'green',
    marginRight: 10,
  },
  heartIcon: {
    color: 'red',
    marginRight: 10,
  },
});

export default Profile;
