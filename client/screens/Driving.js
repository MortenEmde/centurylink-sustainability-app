import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
  Switch,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCarSide,
  faUsers,
  faUtensils,
  faToolbox,
  faChair,
  faDesktop,
} from '@fortawesome/free-solid-svg-icons';
import { CheckBox, Button } from 'react-native-elements';

const Driving = ({ navigation }) => {
  const [modalCarpoolVisible, setModalCarpoolVisible] = useState(false);
  const [modalDeskVisible, setModalDeskVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalCarpoolVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Car!</Text>
            <Switch onChange={toggleSwitch} value={isEnabled}></Switch>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalCarpoolVisible(!modalCarpoolVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalDeskVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Desk!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalDeskVisible(!modalDeskVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={styles.employeeCount}>
        <Text>Current employees in office: 24</Text>
        <Text>Current employees in your department: 6</Text>
      </View>
      <View style={styles.option}>
        <FontAwesomeIcon icon={faCarSide} size={60} />
        <FontAwesomeIcon icon={faUsers} size={60} />
        <Button
          // add state
          // checked={this.state.checked}
          // onPress={() => this.setState({checked: !this.state.checked})}
          title="Carpool"
          onPress={() => {
            setModalCarpoolVisible(!modalCarpoolVisible);
          }}
        />
      </View>
      <View style={styles.option}>
        <FontAwesomeIcon icon={faUtensils} size={60} />
        <FontAwesomeIcon icon={faToolbox} size={60} />
        <Switch
        // add state
        // checked={this.state.checked}
        // onPress={() => this.setState({checked: !this.state.checked})}
        />
      </View>
      <View style={styles.option}>
        <FontAwesomeIcon icon={faDesktop} size={60} />
        <FontAwesomeIcon icon={faChair} size={60} />
        <Button
          title="Select Chair"
          // add state
          // checked={this.state.checked}
          // onPress={() => this.setState({checked: !this.state.checked})}
          onPress={() => {
            setModalDeskVisible(true);
          }}
        />
      </View>
      <Button
        title="Start journey"
        onPress={() => navigation.push('Confirmation')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  employeeCount: {
    alignItems: 'center',
    marginTop: 15,
  },
  option: {
    flexDirection: 'row',
    margin: 20,
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Driving;
