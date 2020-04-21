import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

const GoButton = () => {
  return (
    <View>
      <Button buttonStyle={styles.button} icon={
        <FontAwesomeIcon style={styles.icon} icon={faArrowCircleRight} size={45}/>
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'white',
  },
  button: {
    backgroundColor: 'green',
    width: 220,
    height: 80,
    margin: 10,
  }
});

export default GoButton