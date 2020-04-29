import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faStar } from '@fortawesome/free-solid-svg-icons';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Scoreboard from './screens/Scoreboard';
import Cycling from './screens/Cycling';
import Driving from './screens/Driving';
import Walking from './screens/Walking';
import PublicTransport from './screens/PublicTransport';
import Confirmation from './screens/Confirmation';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ScoreboardStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Cycling" component={Cycling} />
    <HomeStack.Screen name="Driving" component={Driving} />
    <HomeStack.Screen name="Walking" component={Walking} />
    <HomeStack.Screen name="Public Transport" component={PublicTransport} />
    <HomeStack.Screen name="Confirmation" component={Confirmation} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const ScoreboardStackScreen = () => (
  <ScoreboardStack.Navigator>
    <ScoreboardStack.Screen name="Scoreboard" component={Scoreboard} />
  </ScoreboardStack.Navigator>
);

const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#ffffff"
        barStyle={{ backgroundColor: '#3b8348', paddingTop:10 }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} color={color} size={35} />
            ),
          }}
          name="Home"
          component={HomeStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUser} color={color} size={35} />
            ),
          }}
          name="Profile"
          component={ProfileStackScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faStar} color={color} size={35} />
            ),
          }}
          name="Scoreboard"
          component={ScoreboardStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
