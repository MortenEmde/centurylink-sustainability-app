import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, ListItem, Divider } from 'react-native-elements';

const department = [
  {
    name: 'Jane',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    rank: '1',
  },
  {
    name: 'Brian',
    avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
    rank: '2',
  },
  {
    name: 'Brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    rank: '3',
  },
  {
    name: 'Steve',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    rank: '4',
  },
  {
    name: 'Bob',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    rank: '5',
  },
];
const office = [
  {
    name: 'Billy',
    avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
    rank: '1',
  },
  {
    name: 'Angelina',
    avatar: 'https://randomuser.me/api/portraits/women/36.jpg',
    rank: '2',
  },
  {
    name: 'Sam',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    rank: '3',
  },
  {
    name: '...',
    avatar: '',
    rank: '',
  },
  {
    name: 'Jane',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    rank: '8',
  },
];

const Scoreboard = () => {
  return (
    <ScrollView>
      <Card containerStyle={{ padding: 0 }} title="Department Top 5">
        {department.map((u, i) => {
          return (
            <ListItem
              key={i}
              roundAvatar
              title={u.name}
              leftAvatar={{source: {uri: u.avatar}}}
              bottomDivider
              rightTitle={u.rank}
            />
          );
        })}
      </Card>
      <Card containerStyle={{ padding: 0 }} title="Office Top 3">
        {office.map((u, i) => {
          return (
            <ListItem
              key={i}
              roundAvatar
              title={u.name}
              leftAvatar={{source: {uri: u.avatar}}}
              bottomDivider
              rightTitle={u.rank}
            />
          );
        })}
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Scoreboard;
