
//*********IMPORTS AND SCREENS  *********************//
import React from 'react';
import { View,Text,TouchableOpacity,Alert,Pressable, StyleSheet, TextInput } from 'react-native'; 
import typesData from './data/types';
import Onecar from './Onecar';
import Twocar from './Twocar';

//*********IMPORTS AND SCREENS  *********************//



//*********Cartypes  *********************//
const Cartypes=(props)=>{
    const confirm=()=>{
        Alert.alert(
            "Notification",
            "Are You Sure,you Wish To Confirm This Ride.",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "Confirm", onPress: () => props.navigation.navigate('Waiting') }
            ],
            { cancelable: false }
          );
    }

//*********IMPORTS AND SCREENS  *********************//

return(

  <View style={{alignItems:'center'}}>
<Onecar/>
<Twocar/>
<Pressable style={{backgroundColor:'black',width:'90%',height:40,margin:10,padding:10,}} onPress={confirm}><Text style={{color:'white',alignItems:'center',alignSelf:'center'}}>Confirm Ride</Text></Pressable>
</View>




);


};

export default Cartypes;

