
 //********VERIFY OTP SECTION *********************//





 //********IMPORT MODULES*********************//
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet,Image,TextInput,TouchableOpacity ,Text, View, Button ,Alert} from 'react-native';
import * as SecureStore from 'expo-secure-store';

 //********IMPORT MODULES*********************//


export default function Verify({ navigation }) {


 //********SET STATES*********************//
    const [text, setText] = useState('');
    const [fromb, setfromb] = useState('');
    const [mobile, setmobile] = useState('');

 //********SET STATES*********************//



 //********GENERAL FUNCTION TO SAVE KEY STORE SESSION*********************//
 async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}
 //********GENERAL FUNCTION TO SAVE KEY STORE SESSION*********************//




  //********GENERAL FUNCTION TO GET VALUES FROM SESSION*********************//
 async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    // return("" + result);
   setfromb(result);
  } else {
    alert('No values stored under that key.');
  }
 }
   //********GENERAL FUNCTION TO GET VALUES FROM SESSION*********************//


     //********GENERAL FUNCTION TO GET VALUES FROM SESSION*********************//
 async function getValueFor2(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    // return("" + result);
   setmobile(result);
  } else {
    alert('No values stored under that key.');
  }
 }
   //********GENERAL FUNCTION TO GET VALUES FROM SESSION*********************//



     //********GET THE OTPCODE*********************//
 getValueFor("code");

     //********GET THE MOBILE NUMBER*********************//
 getValueFor2("mobile");





     //********CHECK IF CODE IS CORRECT*********************//
const checkcodeIntegrity=()=>{
  var thecode = fromb;
  var received = text;

  if(thecode == received){

    alert('Code Verified Successfully');
    save("logged","confirmed");
    navigation.navigate('Dashboard');
  }else{

    alert('Sorry The Code Does Not Match');

      }



}


     //********CHECK IF CODE IS CORRECT*********************//







     //********RESEND OTP CODE*********************//

const ResendCode=()=>{


  let data = {
    method: 'POST',
    credentials: 'same-origin',
    mode: 'same-origin',
    body: JSON.stringify({
      mobile:mobile,
      code:fromb
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
                     { text: "OK", onPress: () => console.log("okay pressed") }
                   ],
                   { cancelable: false }
                 )
               )


}


     //********RESEND OTP CODE*********************//











     //********CLICK ACTION FOR VERIFYING OTP*********************//
const VerifyPhone=()=>{
    Alert.alert(
        "Beetle Notification",
        "Are You Sure of the Following Digits "+ text,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () =>checkcodeIntegrity()  }
        ],
        { cancelable: false }
      );
  


}



     //********CLICK ACTION FOR VERIFYING OTP*********************//




    return (
      <View style={styles.container}>
          <StatusBar hidden={true} style={styles.stat}/> 
          <Image  style={{marginBottom:30}}   source={require('./images/password.png')} />

            <Text   style={{marginBottom:20,}}>OTP Verification</Text>
          <TextInput
        style={{height: 40,borderBottomColor:'#000000',borderBottomWidth:0.5,width:300}}
        placeholder="Type In The 4 Digit OTP you received"
        onChangeText={text => setText(text)}
        defaultValue={text}/>    
         <Text style={{marginTop:20,color:'#FC6713' }}  onPress={ResendCode}>Didn't Get an OTP, Click Here To Resend </Text>
 
        
        
          <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={VerifyPhone}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Verify</Text>
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

