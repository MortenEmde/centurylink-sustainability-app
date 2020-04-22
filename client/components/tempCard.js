import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle, faWalking, faCarSide, faShuttleVan, faStar, faLeaf, faHeartbeat, faClock } from '@fortawesome/free-solid-svg-icons';


const CardGen = () => {
   
   const cycling = [
    {
      destination_addresses: [
         "Stekkenbergweg 4, 1105 AJ Amsterdam, Netherlands"
      ],
      origin_addresses: [
         "Fred. Roeskestraat 115, 1076 EE Amsterdam, Netherlands"
      ],
      rows: [
         {
            elements: [
               {
                  distance: {
                     text: "10.0 km",
                     value: 10041
                  },
                  duration: {
                     text: "34 mins",
                     value: 2018
                  },
                  status: "OK"
               }
            ]
         }
      ],
      status: "OK"
    }
   ]
  
   return (
     <View>
       <Card containerStyle={{ padding: 0 }}>
         {cycling.map((u, i) => {
           return (
             <View>
               <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].duration.text}</Text>
               <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].distance.value}</Text>
               <Text style={{ marginBottom: 10 }}>{u.rows[0].elements[0].duration.value}</Text>
             </View>
           );
         })}
       </Card>
     </View>
   );
}

export default CardGen
