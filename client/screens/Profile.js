import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLeaf, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Card>
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
          <Text style={styles.name}>Jane Porter</Text>
          <Text style={styles.department}>Department: Technology</Text>
        </View>
        <View style={styles.allPoints}>
          <View style={styles.pointsRow}>
            <FontAwesomeIcon
              icon={faHeartbeat}
              style={styles.heartIcon}
              size={40}
            />
            <Text style={styles.pointsText}>{42}</Text>
          </View>
          <View style={styles.pointsRow}>
            <FontAwesomeIcon icon={faLeaf} style={styles.leafIcon} size={40} />
            <Text style={styles.pointsText}>{41}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 11,
    height: '100%',
    backgroundColor: '#b6d688',
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    marginTop: 50,
    marginBottom: 40,
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
  allPoints: {
    marginBottom: 40,
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
