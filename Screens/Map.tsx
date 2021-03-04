
 //********IMPORT MODULES *********************//
import  React ,{ useState, useEffect } from 'react';
import MapView  from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Pickup from './Pickup';
import Dropoff from './Dropoff';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import Marker  from 'react-native-maps';
 //********IMPORT MODULES *********************//
export default function Map() {

   //********SET DEFAULT VARS IN STATE *********************//
    const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
 //********SET DEFAULT VARS IN STATE*********************//


 //********GET LOCATION PERMISSIONS AND THEN GET CURRENT LOCATION*********************//

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

 //********GET LOCATION PERMISSIONS*********************//


 //********ABUJA CENTRAL COORDINATES*********************//

  var latitude=9.0491;
  var longitude =7.4727;
 //********ABUJA CENTRAL COORDINATES*********************//


   //********SET CURRENT POSITION *********************//

  let text = 'Waiting..';
  let loco;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
   loco=JSON.parse(text);
   
  }
  if(loco){
    latitude=loco.coords.latitude;
    longitude = loco.coords.longitude;
  }
   //********SET CURRENT POSITION *********************//

  return (

    
  <View style={{position:'absolute'}}>
      
  {/* Create Map Set Initial Region and Then show User Location */}
<MapView style={styles.map} initialRegion={{
      latitude:latitude,
      longitude: longitude,
      latitudeDelta: 2.2,
      longitudeDelta: 2.2,
    }} showsUserLocation={true}> 

</MapView >
 {/* Create Map Set Initial Region and Then show User Location */}
  </View>
      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height:'100%',
    zIndex:0,
  },
mapq:{
   width:200,
   height:200,
}
});
