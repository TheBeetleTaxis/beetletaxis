 //********IMPORT MODULES********************//

import React from 'react';
import { View,Button,Text,TouchableOpacity, StyleSheet, TextInput } from 'react-native'; 
import * as SecureStore from 'expo-secure-store';
import HomeMap from './Home/HomeMap';
import Cartypes from './Cartypes';
import Map from './Map';
import DestinationMap from './Home/DestinationMap';
import getDirections from 'react-native-google-maps-directions';
 //********IMPORT MODULES**********************//


const SearchResults=({ route, navigation })=>{
  const {originPlace, destinationPlace} = route.params;
  // alert(JSON.stringify(originPlace));
 //********SET RECEIVED ORIGIN AND DESTINATION FROM PROPS*********************//

var myorigin = JSON.parse(JSON.stringify(originPlace));
var mydestination = JSON.parse(JSON.stringify(destinationPlace));
var myolatitude =myorigin.details.geometry.location.lat;
var myolongitude =myorigin.details.geometry.location.lng;
var mydlatitude =mydestination.details.geometry.location.lat;
var mydlongitude =mydestination.details.geometry.location.lng;
 //********SET RECEIVED ORIGIN AND DESTINATION FROM PROPS*********************//


 

 //********GOOGLE DIRECTION NAVIGATION FOR ROUTE GUIDANCE*********************//

const handleGetDirections = () => {
     
  const data = {
     source: {
      latitude: myolatitude,
      longitude: myolongitude
    },
    destination: {
      latitude: mydlatitude ,
      longitude: mydlongitude
    },
    params: [
      {
        key: "travelmode",
        value: "driving"        // may be "walking", "bicycling" or "transit" as well
      },
      {
        key: "dir_action",
        value: "navigate"       // this instantly initializes navigation using the given travel mode
      }
    ]
  }

  getDirections(data)
}

 //********GOOGLE DIRECTION NAVIGATION FOR ROUTES GUIDANCE*********************//

return(
<View style={{ flex: 1 }}>
  <View style={{ flex: 1 }}>
  
<DestinationMap originPlace={originPlace} destinationPlace={destinationPlace}/>
  </View>
  <View style={{ flex: 1, padding:10  }}>
   <Cartypes navigation={navigation}/>
<Button style={{width:'100%',alignSelf: 'center',}} onPress={handleGetDirections} title="Get Directions" />
  </View>
  
</View>


);


};

export default SearchResults;

