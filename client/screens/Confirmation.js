import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils, faToolbox, faChair, faDesktop, faBicycle, faCreditCard, faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const Confirmation = () => {
  return (
    <View>
       <FontAwesomeIcon
        icon={faSmileBeam}
        size={60}
      />
      <Text>Have a nice Journey!</Text>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default Confirmation;

