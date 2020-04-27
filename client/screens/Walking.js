import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCarSide, faUsers, faUtensils, faToolbox, faChair, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { CheckBox, Button } from 'react-native-elements';

const Walking = ({ navigation }) => {
  return (
    <View>
      <View style={styles.employeeCount}>
      <Text>Current employees in office: 24</Text>
      <Text>Current employees in your department: 6</Text>
    </View>
    <View style={styles.option}>
       <FontAwesomeIcon
              icon={faUtensils}
              size={60}
            />
      <FontAwesomeIcon
            icon={faToolbox}
            size={60}
            />
      <CheckBox
        // add state
        // checked={this.state.checked}
        // onPress={() => this.setState({checked: !this.state.checked})}
      />
    </View>
    <View style={styles.option}>
       <FontAwesomeIcon
              icon={faDesktop}
              size={60}
            />
      <FontAwesomeIcon
            icon={faChair}
            size={60}
            />
      <CheckBox
        // add state
        // checked={this.state.checked}
        // onPress={() => this.setState({checked: !this.state.checked})}
      />
    </View>
    <Button title="Start journey" onPress={() => navigation.push('Confirmation')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  employeeCount: {
    alignItems: "center",
    marginTop: 15

  },
  option: {
    flexDirection: "row",
    margin: 20
  } });

export default Walking;