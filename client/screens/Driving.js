import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Modal,
  TouchableHighlight,
  Switch,
  Image,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCarSide,
  faUsers,
  faUtensils,
  faToolbox,
  faChair,
  faDesktop,
  faCar,
  faUserFriends,
  faBicycle,
  faCreditCard,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Slider } from 'react-native-elements';

const Driving = ({ navigation }) => {
  const [modalCarpoolVisible, setModalCarpoolVisible] = useState(false);
  const [modalLunchVisible, setModalLunchVisible] = useState(false);
  const [modalDeskVisible, setModalDeskVisible] = useState(false);
  const [modalBikeRentalVisible, setModalBikeRentalVisible] = useState(false);

  const [isCarpool, setIsCarpool] = useState(false);
  const [isPassenger, setIsPassenger] = useState(false);
  const [isBringingLunch, setIsBringingLunch] = useState(false);
  const [isBringingCup, setIsBringingCup] = useState(false);
  const [lunchForColleagues, setLunchForColleagues] = useState(0);
  const [isBringingPlastic, setIsBringingPlastic] = useState(false);

  const toggleCarpoolSwitch = () =>
    setIsCarpool((previousState) => !previousState);
  const togglePassengerSwitch = () =>
    setIsPassenger((previousState) => !previousState);
  const toggleLunchSwitch = () =>
    setIsBringingLunch((previousState) => !previousState);
  const toggleCupSwitch = () =>
    setIsBringingCup((previousState) => !previousState);
  const togglePlasticSwitch = () =>
    setIsBringingPlastic((previousState) => !previousState);

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
            <View style={styles.carpoolPref}>
              <Text style={styles.modalText}>Do you want to Carpool?</Text>
              <Switch onChange={toggleCarpoolSwitch} value={isCarpool}></Switch>
            </View>
            <View style={styles.driverChoice}>
              <FontAwesomeIcon icon={faCar} size={60} />
              <Switch
                disabled={!isCarpool}
                onChange={togglePassengerSwitch}
                value={isPassenger}
              ></Switch>
              <FontAwesomeIcon icon={faUserFriends} size={60} />
            </View>
            <View>
              <Image
                source={require('../assets/map.png')}
                style={{ width: 300, height: 300 }}
              />
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalCarpoolVisible(!modalCarpoolVisible);
              }}
            >
              <Text style={styles.textStyle}>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalLunchVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, styles.modalLunchView]}>
            <View style={styles.lunchPref}>
              <Text style={styles.modalText}>Bringing own lunch?</Text>
              <Switch
                onChange={toggleLunchSwitch}
                value={isBringingLunch}
              ></Switch>
            </View>
            <View style={styles.lunchPref}>
              <Text style={styles.modalText}>Bringing own cup?</Text>
              <Switch onChange={toggleCupSwitch} value={isBringingCup}></Switch>
            </View>
            <View>
              <Text style={styles.modalText}>
                Bringing lunch for collegues?
              </Text>
              <Slider
                value={lunchForColleagues}
                minimumValue={0}
                maximumValue={10}
                step={1}
                onValueChange={(value) => setLunchForColleagues(value)}
              />
              <Text>{lunchForColleagues}</Text>
            </View>
            <View style={styles.lunchPref}>
              <Text style={styles.modalText}>No single use plastics?</Text>
              <Switch
                onChange={togglePlasticSwitch}
                value={isBringingPlastic}
              ></Switch>
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalLunchVisible(!modalLunchVisible);
              }}
            >
              <Text style={styles.textStyle}>Done</Text>
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
            <Text style={styles.modalText}>Select your desk</Text>
            <View>
              <Image
                source={require('../assets/office.png')}
                style={{ width: 300, height: 300 }}
              />
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalDeskVisible(!modalDeskVisible);
              }}
            >
              <Text style={styles.textStyle}>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalBikeRentalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              10 Bikes are still available at your nearest Station.
            </Text>
            <Text style={styles.modalText}>Reserve one below. </Text>
            <View>
              <Image
                source={require('../assets/map.png')}
                style={{ width: 300, height: 300 }}
              />
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalBikeRentalVisible(!modalBikeRentalVisible);
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
        <FontAwesomeIcon icon={faCarSide} size={60} />
        <FontAwesomeIcon icon={faUsers} size={60} />
        <Button
          buttonStyle={{ backgroundColor: '#3b8348' }}
          title="Carpool"
          onPress={() => {
            setModalCarpoolVisible(!modalCarpoolVisible);
          }}
        />
      </View>
      <View style={styles.option}>
        <FontAwesomeIcon icon={faUtensils} size={60} />
        <FontAwesomeIcon icon={faToolbox} size={60} />
        <Button
          buttonStyle={{ backgroundColor: '#3b8348' }}
          title="Lunch options"
          onPress={() => {
            setModalLunchVisible(true);
          }}
        />
      </View>
      <View style={styles.option}>
        <FontAwesomeIcon icon={faDesktop} size={60} />
        <FontAwesomeIcon icon={faChair} size={60} />
        <Button
          buttonStyle={{ backgroundColor: '#3b8348' }}
          title="Select Desk"
          onPress={() => {
            setModalDeskVisible(true);
          }}
        />
      </View>

      <View style={styles.option}>
        <FontAwesomeIcon icon={faBicycle} size={60} />
        <FontAwesomeIcon icon={faCreditCard} size={60} />
        <Button
          buttonStyle={{ backgroundColor: '#3b8348' }}
          title="Rent a Bike"
          onPress={() => {
            setModalBikeRentalVisible(true);
          }}
        />
      </View>

      <Button
        buttonStyle={{ backgroundColor: '#3b8348' }}
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
  modalLunchView: {
    alignItems: 'flex-start',
  },
  carpoolPref: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverChoice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lunchPref: {
    flexDirection: 'row',
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
    fontSize: 20,
  },
});

export default Driving;
