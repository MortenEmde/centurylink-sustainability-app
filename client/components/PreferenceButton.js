import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';

const PreferenceButton = ({ type }) => {
  const icon = {
    star: faStar,
    environment: faLeaf,
    health: faHeartbeat,
    time: faClock,
  };

  return (
    <View>
      <Button
        buttonStyle={styles.button}
        icon={
          <FontAwesomeIcon style={styles.icon} icon={icon[type]} size={45} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  button: {
    backgroundColor: 'darkslateblue',
    width: 80,
    height: 80,
    margin: 10,
  },
});

export default PreferenceButton;
