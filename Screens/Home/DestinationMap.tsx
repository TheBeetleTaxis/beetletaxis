import React from 'react';
import { View,Button,Text,Image, StyleSheet, TextInput } from 'react-native'; 
import MapView ,{PROVIDER_GOOGLE, Marker, AnimatedRegion} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const DestinationMap=(props)=>{


const originPlace =props.originPlace;
const destinationPlace = props.destinationPlace

var myorigin = JSON.parse(JSON.stringify(originPlace));
var mydestination = JSON.parse(JSON.stringify(destinationPlace));
var myolatitude =myorigin.details.geometry.location.lat;
var myolongitude =myorigin.details.geometry.location.lng;
var mydlatitude =mydestination.details.geometry.location.lat;
var mydlongitude =mydestination.details.geometry.location.lng;
const origin={
    latitude:myolatitude,
    longitude: myolongitude,

}
const destination={
    latitude:mydlatitude,
    longitude: mydlongitude
}



  
return(
<View style={{height:'100%' ,width:'100%', backgroundColor:"#FAFAFA",justifyContent:'center',alignItems:'center'}}>

<MapView style={styles.map}
provider={PROVIDER_GOOGLE}
zoomEnabled={true}
minZoomLevel={10}
initialRegion={{
      latitude:9.0765,
      longitude: 7.3986,
      latitudeDelta: 2,
      longitudeDelta:2,
     
    }
    
    } showsUserLocation={true}> 


{/* <MapView.Marker
						coordinate={destination}
						image={require('../images/marker.png')}
					>
					  
					</MapView.Marker> */}

 <MapViewDirections 
    origin={origin}
    destination={destination}
    apikey={'AIzaSyBhHYFJOYsg266-l702ZxNrKHEdrRmt6jw'}
    strokeWidth={5}
    strokeColor="hotpink"
  />
</MapView >
</View>



); 


};
const styles = StyleSheet.create({
    map: {
        width: '100%',
        height:'100%',
        
    },
   
});

export default DestinationMap;