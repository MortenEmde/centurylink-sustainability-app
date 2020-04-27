import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle, faWalking, faCarSide, faShuttleVan, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <View>
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
        <Text 
          style={styles.name}>
          Jane Doe
        </Text>
        <Text 
          style={styles.department}>
          Department: Technology
        </Text>
      </View>
      <View style={styles.pointsRow}>
        <FontAwesomeIcon
          icon={faHeartbeat}
          style={styles.heartIcon}
          size={30}
        />
        <Text style={styles.pointsText}>
          {10}
        </Text>
      </View>
      <View style={styles.pointsRow}>
        <FontAwesomeIcon
          icon={faLeaf}
          style={styles.leafIcon}
          size={30}
        />
        <Text style={styles.pointsText}>
          {30}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
  },
  userInfo: {
    alignItems: 'center',
  },
  name: {
    fontSize: 50,
  },
  department: {
    fontSize: 20,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsText: {
    fontSize: 30,
  }
})

export default Profile;
