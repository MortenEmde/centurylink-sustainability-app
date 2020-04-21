import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBicycle } from '@fortawesome/free-solid-svg-icons'

const Cycling = () => {
  return (
    <View>
      <Button buttonStyle={styles.button} icon={
        <FontAwesomeIcon style={styles.icon} icon={faBicycle} size={35}/>
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

export default Cycling