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
  faHeartbeat,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';
import { Button, Slider } from 'react-native-elements';

const Driving = ({ navigation }) => {
  const [modalCarpoolVisible, setModalCarpoolVisible] = useState(false);
  const [modalLunchVisible, setModalLunchVisible] = useState(false);
  const [modalDeskVisible, setModalDeskVisible] = useState(false);

  const [isCarpool, setIsCarpool] = useState(false);
  // const [isPassenger, setIsPassenger] = useState(false);
  const [isBringingLunch, setIsBringingLunch] = useState(false);
  const [isBringingCup, setIsBringingCup] = useState(false);
  const [lunchForColleagues, setLunchForColleagues] = useState(0);
  const [isBringingPlastic, setIsBringingPlastic] = useState(false);

  const toggleCarpoolSwitch = () =>
    setIsCarpool((previousState) => !previousState);
  // const togglePassengerSwitch = () => setIsPassenger((previousState) => !previousState);
  const toggleLunchSwitch = () =>
    setIsBringingLunch((previousState) => !previousState);
  const toggleCupSwitch = () =>
    setIsBringingCup((previousState) => !previousState);
  const togglePlasticSwitch = () =>
    setIsBringingPlastic((previousState) => !previousState);

  return (
    <View style={styles.container}>
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
              <Switch onChange={toggleCarpoolSwitch} value={isCarpool} />
            </View>
            <View style={styles.driverChoice}>
              <View style={{ alignItems: 'center', marginRight: 20 }}>
                <Button
                  buttonStyle={{ backgroundColor: '#3b8348' }}
                  icon={
                    <FontAwesomeIcon icon={faCar} size={60} marginRight={0} />
                  }
                />
                <Text>As driver</Text>
              </View>
              <View style={{ alignItems: 'center', marginLeft: 20 }}>
                <Button
                  buttonStyle={{ backgroundColor: '#b6d688' }}
                  icon={
                    <FontAwesomeIcon
                      icon={faUserFriends}
                      size={60}
                      marginLeft={0}
                    />
                  }
                />
                <Text>As Passenger</Text>
              </View>
            </View>
            <View style={styles.map}>
              <Image
                source={require('../assets/map.png')}
                style={{ width: 300, height: 300 }}
              />
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3b8348' }}
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
            <View style={styles.lunchChoices}>
              <View style={styles.lunchPref}>
                <Text style={styles.modalText}>Bringing own lunch?</Text>
                <Switch onChange={toggleLunchSwitch} value={isBringingLunch} />
              </View>
              <View style={styles.lunchPref}>
                <Text style={styles.modalText}>Bringing own cup?</Text>
                <Switch onChange={toggleCupSwitch} value={isBringingCup} />
              </View>
              <View style={styles.lunchPref}>
                <Text style={styles.modalText}>No single use plastics?</Text>
                <Switch
                  onChange={togglePlasticSwitch}
                  value={isBringingPlastic}
                />
              </View>
            </View>

            <View>
              <Text style={styles.modalText}>
                Bringing lunch for colleagues?
              </Text>
              <Slider
                value={lunchForColleagues}
                minimumValue={0}
                maximumValue={10}
                step={1}
                onValueChange={(value) => setLunchForColleagues(value)}
              />
              <Text style={{ fontSize: 20 }}>{lunchForColleagues}</Text>
            </View>
            <View style={styles.doneButtonLunch}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#3b8348' }}
                onPress={() => {
                  setModalLunchVisible(!modalLunchVisible);
                }}
              >
                <Text style={styles.textStyle}>Done</Text>
              </TouchableHighlight>
            </View>
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
            <Text
              style={([styles.modalText], { fontSize: 25, marginBottom: 30 })}
            >
              Select your desk
            </Text>
            <View style={styles.office}>
              <Image
                source={require('../assets/office.png')}
                style={{ width: 300, height: 300 }}
              />
            </View>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#3b8348' }}
              onPress={() => {
                setModalDeskVisible(!modalDeskVisible);
              }}
            >
              <Text style={styles.textStyle}>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <View style={styles.employeeCount}>
        <Text style={styles.employeeText}>Current employees in office: 24</Text>
        <Text style={styles.employeeText}>
          Current employees in your department: 6
        </Text>
      </View>
      <View style={styles.option}>
        <View style={styles.iconSet}>
          <FontAwesomeIcon icon={faCarSide} size={60} />
          <FontAwesomeIcon icon={faUsers} size={60} />
        </View>
        <View style={styles.mainPoints}>
          <View style={styles.pointsRow}>
            <FontAwesomeIcon
              icon={faHeartbeat}
              style={styles.heartIcon}
              size={20}
            />
            <Text style={styles.pointsText}>+{5}</Text>
          </View>
          <View style={styles.pointsRow}>
            <FontAwesomeIcon icon={faLeaf} style={styles.leafIcon} size={20} />
            <Text style={styles.pointsText}>+{11}</Text>
          </View>
        </View>
        <Button
          style={{ marginLeft: 50 }}
          buttonStyle={{ backgroundColor: '#3b8348' }}
          title="Carpool"
          onPress={() => {
            setModalCarpoolVisible(!modalCarpoolVisible);
          }}
        />
      </View>
      <View style={styles.option}>
        <View style={styles.iconSet}>
          <FontAwesomeIcon icon={faToolbox} size={60} />
          <FontAwesomeIcon icon={faUtensils} size={60} />
        </View>
        <View style={styles.mainPoints}>
          <View style={styles.pointsRow}>
            <FontAwesomeIcon
              icon={faHeartbeat}
              style={styles.heartIcon}
              size={20}
            />
            <Text style={styles.pointsText}>+{3}</Text>
          </View>
          <View style={styles.pointsRow}>
            <FontAwesomeIcon icon={faLeaf} style={styles.leafIcon} size={20} />
            <Text style={styles.pointsText}>+{9}</Text>
          </View>
        </View>
        <Button
          buttonStyle={{ backgroundColor: '#3b8348' }}
          title="Lunch options"
          onPress={() => {
            setModalLunchVisible(true);
          }}
        />
      </View>
      <View style={styles.option}>
        <View style={styles.iconSet}>
          <FontAwesomeIcon icon={faDesktop} size={60} />
          <FontAwesomeIcon icon={faChair} size={60} />
        </View>

        <Button
          buttonStyle={{ backgroundColor: '#3b8348' }}
          title="Select Desk"
          onPress={() => {
            setModalDeskVisible(true);
          }}
        />
      </View>

      <Button
        buttonStyle={{
          marginHorizontal: 20,
          marginTop: 70,
          height: 60,
          backgroundColor: '#3b8348',
        }}
        title="Start journey"
        titleStyle={{ fontWeight: 'bold', fontSize: 20 }}
        onPress={() => navigation.push('Confirmation')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  mainPoints: {},
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
  pointsText: {
    fontSize: 20,
    marginTop: 10,
  },
  leafIcon: {
    marginLeft: 0,
    color: 'green',
    marginRight: 5,
  },
  heartIcon: {
    color: 'red',
    marginRight: 5,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  employeeCount: {
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    width: '100%',
  },
  employeeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  bikeNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  },
  map: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
  },
  office: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 2,
  },
  option: {
    flexDirection: 'row',
    margin: 20,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconSet: {
    flexDirection: 'row',
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
    margin: 15,
    marginBottom: 20,
  },
  lunchPref: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 40,
    paddingHorizontal: 45,
    paddingVertical: 15,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  modalText: {
    margin: 15,
    textAlign: 'center',
    fontSize: 20,
  },
  doneButtonLunch: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Driving;
