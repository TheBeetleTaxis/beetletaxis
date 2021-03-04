
 //********IMPORT MODULES *********************//

import React, { useState } from 'react';
import { View,Text,TouchableOpacity, StyleSheet, TextInput } from 'react-native'; 
import HomeMap from './Home/HomeMap';
import HomeMessage from './Home/HomeMessage';
import HomeSearch from './Home/HomeSearch';

 //********IMPORT MODULES *********************//

const HomeScreen=({ navigation })=>{


return(

    <View style={{ flex: 1 }}>
    <View style={{ flex: 2 }}>
    <HomeMap/></View>
    <View style={{ flex: 1 }}>
    <View style={{ flex: 1,  }} >
   <HomeSearch navigation={navigation}/> 
     </View>
    <View style={{ flex: 1,  }}>
    <HomeMessage/>
    </View>

   

  </View>
</View>




);


};

export default HomeScreen;

