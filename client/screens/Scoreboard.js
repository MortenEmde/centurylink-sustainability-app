import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
// Divider: https://react-native-elements.github.io/react-native-elements/docs/divider.html

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
  },
];

const Scoreboard = () => {
  return (
    <View>
      <Card containerStyle={{ padding: 0 }} title="CARD WITH DIVIDER">
        {users.map((u, i) => {
          return (
            <ListItem
              key={i}
              roundAvatar
              title={u.name}
              avatar={{ uri: u.avatar }}
            />
          );
        })}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Scoreboard;
