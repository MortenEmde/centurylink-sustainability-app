import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLeaf, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const department = [
  {
    name: 'Jane (You)',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    rank: '1',
    hearts: '42',
    leaves: '41',
  },
  {
    name: 'Brian',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    rank: '2',
    hearts: '32',
    leaves: '38',
  },
  {
    name: 'Brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    rank: '3',
    hearts: '30',
    leaves: '36',
  },
  {
    name: 'Steve',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rank: '4',
    hearts: '27',
    leaves: '30',
  },
  {
    name: 'Bob',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    rank: '5',
    hearts: '26',
    leaves: '28',
  },
];
const office = [
  {
    name: 'Billy',
    avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
    rank: '1',
    hearts: '72',
    leaves: '61',
  },
  {
    name: 'Angelina',
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
    rank: '2',
    hearts: '67',
    leaves: '52',
  },
  {
    name: 'Sam',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    rank: '3',
    hearts: '53',
    leaves: '49',
  },
];

const Scoreboard = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Card containerStyle={{ padding: 0, backgroundColor: 'black' }}>
          <View>
            <Text style={styles.header}>Department Top 5 </Text>
            {department.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  leftAvatar={{ source: { uri: u.avatar } }}
                  bottomDivider
                  rightTitle={
                    <View style={styles.pointsContainer}>
                      <FontAwesomeIcon
                        icon={faHeartbeat}
                        style={styles.heartIcon}
                        size={30}
                      />
                      <Text style={styles.pointsText}>{u.hearts}</Text>
                      <FontAwesomeIcon
                        icon={faLeaf}
                        style={styles.leafIcon}
                        size={30}
                      />
                      <Text style={styles.pointsText}>{u.leaves}</Text>
                    </View>
                  }
                />
              );
            })}
          </View>
        </Card>
        <Card containerStyle={{ padding: 0, backgroundColor: 'black' }}>
          <View>
            <Text style={styles.header}>Office Top 3</Text>
            {office.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  leftAvatar={{ source: { uri: u.avatar } }}
                  bottomDivider
                  rightTitle={
                    <View style={styles.pointsContainer}>
                      <FontAwesomeIcon
                        icon={faHeartbeat}
                        style={styles.heartIcon}
                        size={30}
                      />
                      <Text style={styles.pointsText}>{u.hearts}</Text>
                      <FontAwesomeIcon
                        icon={faLeaf}
                        style={styles.leafIcon}
                        size={30}
                      />
                      <Text style={styles.pointsText}>{u.leaves}</Text>
                    </View>
                  }
                />
              );
            })}
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 11,
    height: '100%',
    backgroundColor: '#b6d688',
  },
  header: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 5,
  },
  leafIcon: {
    marginLeft: 20,
    color: 'green',
    marginRight: 10,
  },
  heartIcon: {
    color: 'red',
    marginRight: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 20,
  },
});

export default Scoreboard;
