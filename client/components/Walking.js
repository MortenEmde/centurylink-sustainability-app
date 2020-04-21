import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWalking } from '@fortawesome/free-solid-svg-icons'

const Walking = () => {
  return (
    <View>
      <Button buttonStyle={styles.button} icon={
        <FontAwesomeIcon style={styles.icon} icon={faWalking} size={35}/>
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
    backgroundColor: 'darkslateblue',
    width: 80,
    height: 80,
    margin: 10,
  }
});

export default Walking