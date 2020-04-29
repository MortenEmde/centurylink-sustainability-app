import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { JourneyContext } from '../contexts/journey.js';

const JourneyPlanner = () => {
  const [inputOrigin, setInputOrigin] = useState('');
  const [inputDestination, setInputDestination] = useState('');

  return (
    <JourneyContext.Consumer>
      {({origin, destination, updateJourney}) => (
        <View style={styles.container}>
          <Input
          leftIcon={{ type: 'font-awesome', name: 'home', marginRight: 15 }}
          placeholder="Add your departure location"
          onChangeText={newOrigin => setInputOrigin(newOrigin)}
        />
          <Input
            leftIcon={{ type: 'font-awesome', name: 'briefcase', marginRight: 15 }}
            placeholder="Add your destination"
            onChangeText={newDestination => setInputDestination(newDestination)}
            />
        <Button onPress={() => updateJourney(inputOrigin, inputDestination)} title="Submit" />
        </View>
      )}
    </JourneyContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
  },
});

export default JourneyPlanner;
