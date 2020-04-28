import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Image, TouchableHighlight } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUtensils, faToolbox, faChair, faDesktop, faBicycle, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Button, Switch } from 'react-native-elements'

const Cycling = ({ navigation }) => {
  const [modalBikeVisible, setModalBikeVisible] = useState(false);
  const [isBike, setIsBike] = useState(false);

  const toggleBikeSwitch = () => setIsBike((previousState) => !previousState);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalBikeVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.bikePref}>
              <Text style={styles.modalText}>Do you want to Bike?</Text>
              <Switch onChange={toggleBikeSwitch} value={isBike}></Switch>
            </View>
            <View>
              <Image source={require('../assets/map.png')} style={{width: 300, height: 300}}/>
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalBikeVisible(!modalBikeVisible);
              }}
            >
              <Text style={styles.textStyle}>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    <View style={styles.employeeCount}>
      <Text>Current employees in office: 24</Text>
      <Text>Current employees in your department: 6</Text>
    </View>
    <View style={styles.option}>
      <FontAwesomeIcon
                icon={faBicycle}
                size={60}
              />
      <FontAwesomeIcon
                icon={faCreditCard}
                size={60}
              />
      <Button
      buttonStyle={{ backgroundColor: '#3b8348' }}
        title="Rent a Bike"
        onPress={() => {
          setModalBikeVisible(!modalBikeVisible);
        }}
      />
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
      <Button
      buttonStyle={{ backgroundColor: '#3b8348' }}
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
      <Button
      buttonStyle={{ backgroundColor: '#3b8348' }}
        // add state
        // checked={this.state.checked}
        // onPress={() => this.setState({checked: !this.state.checked})}
      />
    </View>
    <Button buttonStyle={{ backgroundColor: '#3b8348' }} title="Start journey" onPress={() => navigation.push('Confirmation')}/>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bikePref: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20
  },
});
export default Cycling;
