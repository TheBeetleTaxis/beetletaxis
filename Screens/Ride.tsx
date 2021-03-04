

 //********IMPORT MODULES*********************//

import React, {useState, useEffect} from 'react';
import {View, TextInput,ImageBackground,  StyleSheet,SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

import MapView ,{Marker} from 'react-native-maps';
import PlaceRow from "./PlaceRow";


 //********IMPORT MODULES*********************//


const Ride = (props) => {

 //********GET USERS LOCATION AND DESTINATION AND SET FOR PROP TRANSPORT*********************//

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
       
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      })



    }
  }

 //********GET USERS LOCATION AND DESTINATION AND SET FOR PROP TRANSPORT*********************//




  useEffect(() => {
    checkNavigation();
  }, [originPlace, destinationPlace]);


  // const image = { uri: "https://reactjs.org/logo-og.png" };



  return (
    <SafeAreaView>
      
      <View style={styles.container}>
   
  <MapView style={styles.map} initialRegion={{
      latitude:9.0765,
      longitude: 7.3986,
      latitudeDelta: 1,
      longitudeDelta: 1,
    }} showsMyLocationButton={true}
    showsCompass={true}
    followsUserLocation={true}
    showsUserLocation={true}> 
    </MapView>

    
    <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          currentLocation={false}
          currentLocationLabel='Current location'
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCTgNFOPu7WShe9MMKKosjhD3ro8LkG01A',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
         
        />
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyCTgNFOPu7WShe9MMKKosjhD3ro8LkG01A',
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* Circle near Origin input */}
        <View style={styles.circle} />

        {/* Line between dots */}
        <View style={styles.line} />

        {/* Square near Destination input */}
        <View style={styles.square} />
   
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
    },
    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
      marginLeft: 20,
    },
  
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    listView: {
      position: 'absolute',
        top: 105,
    },
    autocompleteContainer: {
      position: 'absolute',
      top: 0,
      left: 10,
      right: 10,
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationText: {
  
    },
  
    circle: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 20,
      left: 15,
      borderRadius: 5,
    },
    line: {
      width: 1,
      height: 50,
      backgroundColor: '#c4c4c4',
      position: 'absolute',
      top: 28,
      left: 17,
    },
    square: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 80,
      left: 15,
    },map: {
      width: '100%',
      height:'100%',
      },
  });
export default Ride;
