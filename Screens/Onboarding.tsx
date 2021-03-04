
 //********IMPORT MODULES *********************//
import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StyleSheet,Image,TouchableOpacity ,Text, View, Button } from 'react-native';
 //********IMPORT MODULES *********************//
export default function Onboarding({ navigation }) {
    
    return (
      <View style={styles.container}>
          <StatusBar hidden={true} style={styles.stat}/> 
      

          <Image   source={require('./images/rides.png')} />

          <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate('Enter')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Start Your Journey</Text>
    </TouchableOpacity>

      
      </View>
    );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    }, loginScreenButton:{
        width:300,
        marginRight:40,
        marginLeft:40,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        // backgroundColor:'#FC6713',
        backgroundColor:'#0B0B0B',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#fff',
        position:'absolute',
        bottom:20
      },
      loginText:{
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
     
   
});

