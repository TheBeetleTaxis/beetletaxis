 //********IMPORT MODULES *********************//

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { StyleSheet,ActivityIndicator ,Image,TextInput,TouchableOpacity ,Text, View, Button ,Alert} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
export default function Enter({ navigation }) {
 //********IMPORT MODULES *********************//

 //********USE STATE  *********************//

    const [text, setText] = useState('');
    const [loading,setLoading]= useState(false);

 //********USE STATE  *********************//
    


 //********generate fixed OTP codes  *********************//
    function gfg() { 
      var minm = 10000; 
      var maxm = 99999; 
      return Math.floor(Math.random() * (maxm - minm + 1)) + minm; 
  } 

 //********generate fixed OTP codes  *********************//




 //********SEND OTP CODE AND NAVIGATE TO VERIFICATION PAGE *********************//

const VerifyPhone=()=>{
 
  var code= gfg();

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  save("code",code.toString());
  save("mobile",text);

  setLoading(true);


var mobile =text;



  let data = {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify({
      mobile:mobile,
      code:code
    }),
    
  }
  return fetch('https://beetletaxis.com/asset/xapis/sms.php', data)
          .then(response => response.json())  // promise
          .then(json => 
            Alert.alert(
                   "Notification",
                   json.message,
                   [
                     {
                       text: "Cancel",
                       onPress: () => console.log("Cancel Pressed"),
                       style: "cancel"
                     },
                     { text: "OK", onPress: () => navigation.navigate('Verify') }
                   ],
                   { cancelable: false }
                 )
               )


}



 //********SEND OTP CODE AND NAVIGATE TO VERIFICATION PAGE *********************//








    return (
      <View style={styles.container}>
          <StatusBar hidden={true} style={styles.stat}/> 
          <Image  style={{marginBottom:30}}   source={require('./images/phone.png')} />
        
       
         
        
          <TextInput
        style={{height: 40,borderBottomColor:'#000000',borderBottomWidth:0.5,width:300}}
        placeholder="Type In Your Mobile Number e.g 0804xxxxx"
        onChangeText={text => setText(text)}
        defaultValue={text}
 
      />

      {/* Conditional statement for activity indicator */}
      {/* These  only show after the user has clicked the send otp button */}
         { loading && <ActivityIndicator />}

    
          <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={VerifyPhone}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Send Otp</Text>
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

