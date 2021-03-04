import * as React from 'react';
import { View, StyleSheet, TextInput,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 //********GOOGLE API KEY *********************//
const GOOGLE_PLACES_API_KEY = 'AIzaSyCTgNFOPu7WShe9MMKKosjhD3ro8LkG01A'; 
 //********GOOGE API KEY *********************//
const Pickup = () => {
  return (
  
   <GooglePlacesAutocomplete style={{width: Dimensions.get('window').width,height:40}}
        placeholder="Pickup Location"
        query={{
          key: GOOGLE_PLACES_API_KEY,
          language: 'en', // language of the results
        }}
        onPress={(data, details = null) => console.log(data)}
        onFail={(error) => console.error(error)}
        requestUrl={{
          url:
            'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web',
        }} // this in only required for use on the web. See https://git.io/JflFv more for details.
      />
   
   
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor:'transparent',
    
 
    
 

    
  },
});

export default Pickup;
