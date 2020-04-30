import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faStar,
  faLeaf,
  faHeartbeat,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

const PreferenceButton = ({ type, sortItems }) => {
  const icon = {
    star: { name: faStar, color: 'yellow' },
    environment: { name: faLeaf, color: '#a4c0a6' },
    health: { name: faHeartbeat, color: 'red' },
    time: { name: faClock, color: 'black' },
  };

  return (
    <View>
      <Button
        buttonStyle={styles.button}
        onPress={() => sortItems(type)}
        icon={
          <FontAwesomeIcon
            style={{ color: icon[type].color }}
            icon={icon[type].name}
            size={45}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b8348',
    width: 70,
    height: 70,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default PreferenceButton;
