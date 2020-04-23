import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';

const JourneyPlanner = () => {
  return (
    <View style={styles.container}>
      <Input
        leftIcon={{ type: 'font-awesome', name: 'home', marginRight: 15 }}
        placeholder="Add your departure location"
      />
      <Input
        leftIcon={{ type: 'font-awesome', name: 'briefcase', marginRight: 15 }}
        placeholder="Add your destination"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
  },
});

export default JourneyPlanner;
