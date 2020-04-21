import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const AllTransport = () => {
  return (
    <View style={styles.icon}>
      <Button icon={
        <Icon 
        name="car" 
        size= {35} 
        />
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: 'black', 
  },
});

export default AllTransport