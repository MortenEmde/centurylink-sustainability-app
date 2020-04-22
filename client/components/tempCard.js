import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle, faWalking, faCarSide, faShuttleVan, faStar, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';


const CardGen = () => {

  const users = [
    {
       name: 'morten',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

   ]
   
  
   return (
     <View>
       <Card containerStyle={{ padding: 0 }}>
         {users.map((u, i) => {
           return (
             <View>
               <Text style={{ marginBottom: 10 }}>{u.name}</Text>
               <Text style={{ marginBottom: 10 }}>{u.name}</Text>
               <Text style={{ marginBottom: 10 }}>{u.name}</Text>
             </View>
           );
         })}
       </Card>
     </View>
   );
}

export default CardGen
