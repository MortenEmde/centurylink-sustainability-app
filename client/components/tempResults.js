import { ListItem } from 'react-native-elements'
import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'




const ListGen = () => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ];

  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
      leftAvatar={{ source: { uri: item.avatar_url } }}
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
    width: 350
  }
}) 

export default ListGen





