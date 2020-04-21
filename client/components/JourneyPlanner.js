import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

const JourneyPlanner = () => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="  Add your departure location"
        leftIcon={{ type: 'font-awesome', name: 'home' }}
      />
      <Input
        placeholder="  Add your destination"
        leftIcon={{ type: 'font-awesome', name: 'briefcase' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
  },
});

export default JourneyPlanner;
