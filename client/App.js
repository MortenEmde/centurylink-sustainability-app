import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Scoreboard from './screens/Scoreboard';
import Cyclingpref from './screens/cyclingpref';
import Drivingpref from './screens/drivingpref';
import Walkingpref from './screens/walkingpref';
import Transitpref from './screens/transitpref';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ScoreboardStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="cyclingpref" component={Cyclingpref} />
    <HomeStack.Screen name="drivingpref" component={Drivingpref} />
    <HomeStack.Screen name="walkingpref" component={Walkingpref} />
    <HomeStack.Screen name="transitpref" component={Transitpref} />
  </HomeStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const ScoreboardStackScreen = () => (
  <ScoreboardStack.Navigator>
    <ScoreboardStack.Screen name="Scoreboard" component={Scoreboard} />
  </ScoreboardStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="Scoreboard" component={ScoreboardStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
