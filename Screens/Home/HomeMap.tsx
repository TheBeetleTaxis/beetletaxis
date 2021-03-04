import React  ,{ useState, useEffect }  from 'react';
import { View,Text,Image, StyleSheet, TextInput } from 'react-native'; 
import MapView ,{PROVIDER_GOOGLE,Marker} from 'react-native-maps';
import * as Location from 'expo-location';
const HomeMap=(props)=>{

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    let mylocation ;
    let   mylatitude=9.0765;
  let mylongitude=7.3986 ;
  let myregion={};
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        mylocation=JSON.parse(JSON.stringify(location));
        mylatitude=mylocation.coords.latitude;
        mylongitude =mylocation.coords.longitude;

        myregion= {
            latitude: mylatitude,
            longitude: mylongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }

      })();
    }, []);






    // region={this.state.region}
    // onRegionChange={this.onRegionChange}



return(
<View style={{height:'100%' ,width:'100%', backgroundColor:"#FAFAFA",justifyContent:'center',alignItems:'center'}}>

<MapView style={styles.map} initialRegion={{
 
      latitude:mylatitude,
      longitude: mylongitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }} showsMyLocationButton={true}
    showsCompass={true}
    provider={PROVIDER_GOOGLE}
    followsUserLocation={true}
    showsUserLocation={true}> 

</MapView>
</View>



); 


};
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height:'100%',
        },
   
});

export default HomeMap;