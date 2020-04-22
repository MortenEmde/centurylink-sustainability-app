import { ListItem } from 'react-native-elements'
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle, faWalking, faCarSide, faShuttleVan, faStar, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';



const ListGen = () => {
  const list = [
    {
      transportIcon: faBicycle,
    },
    {
      transportIcon: faWalking,
    },
    {
      transportIcon: faCarSide,
    },
    {
      transportIcon: faShuttleVan,
    },
  ];

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      style={styles.listItem}
      leftAvatar={<FontAwesomeIcon icon={item.transportIcon} size={35}/>}
      title={<View><FontAwesomeIcon icon={faLeaf} size={15}/><Text>5</Text></View>}
      subtitle={<View><FontAwesomeIcon icon={faHeartbeat} size={15}/><Text>5</Text></View>}
      bottomDivider
      chevron
    />
  )

  return (
    <View style={styles.listItems}>
      <FlatList
        keyExtractor={keyExtractor}
        data={list}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listItems: {
    width: 350,
  },
  listItem: {
  },
}) 

export default ListGen





