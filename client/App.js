import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Scoreboard from './screens/Scoreboard';
import Cyclingpref from './screens/cyclingpref';
import Drivingpref from './screens/drivingpref';
import Walkingpref from './screens/walkingpref';
import Transitpref from './screens/transitpref';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Scoreboard" component={Scoreboard} />
        <Stack.Screen name="cyclingpref" component={Cyclingpref} />
        <Stack.Screen name="drivingpref" component={Drivingpref} />
        <Stack.Screen name="walkingpref" component={Walkingpref} />
        <Stack.Screen name="transitpref" component={Transitpref} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
