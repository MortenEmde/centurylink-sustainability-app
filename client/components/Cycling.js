import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Cycling = () => {
  return (
    <View style={styles.icon}>
      <Button icon={
        <Icon 
        name="bicycle" 
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

export default Cycling