import React from 'react';
import { View,Text,TouchableOpacity, StyleSheet, TextInput } from 'react-native'; 

const Waiting=({ navigation })=>{
return(
<View style={{ flex: 1 }}>
  <View style={{ flex: 1 }}>
    <TouchableOpacity
      style={{ flex: 1, backgroundColor: 'red' }}
      onPress={() => {  }} // Action
    >
    </TouchableOpacity>

    <TouchableOpacity
      style={{ flex: 1, backgroundColor: 'green' }}
      onPress={() => {  }} // Action
    >
    </TouchableOpacity>

  </View>
  <View style={{ flex: 1 }}>
    <TouchableOpacity
      style={{ flex: 1, backgroundColor: 'blue' }}
      onPress={() => {  }} // Action
    >
    </TouchableOpacity>

    <TouchableOpacity
      style={{ flex: 1, backgroundColor: 'yellow' }}
      onPress={() => {  }} // Action
   >
    </TouchableOpacity>

  </View>
</View>



);


};

export default Waiting;

