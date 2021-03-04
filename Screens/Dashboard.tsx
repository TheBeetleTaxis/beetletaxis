
//*********IMPORTS AND SCREENS  *********************//
import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Pickup from './Pickup';

import Dropoff from './Dropoff';
import Map from './Map';
import Verify from './Verify';
import Homescreen from './HomeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet,Image,TouchableOpacity ,Text, View, Button } from 'react-native';

//*********IMPORTS AND SCREENS  *********************//




//*********DECLARATION FOR TAB NAVIGATOR *********************//

const Tab = createMaterialBottomTabNavigator();
//*********DECLARATION FOR TAB NAVIGATOR *********************//



  //*********TEST TAB FOR MYRIDES *********************//
  function MyRides() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyRides!</Text>
      </View>
    );
  }

  //*********TEST TAB FOR MYRIDES *********************//



  //*********TEST TAB FOR WALLETS *********************//

  function Wallet() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>MyWallet!</Text>
      </View>
    );
  }

  //*********TEST TAB FOR WALLETS *********************//


    //*********TEST TAB FOR PROMO CAMPAIGNS *********************//
  function Promo() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Beetle P</Text>
      </View>
    );
  }
  //********TEST TAB FOR PROMO CAMPAIGNS *********************//


  //********TEST TAB FOR CHAT WITH DRIVER *********************//

  function Chat() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat!</Text>
      </View>
    );
  }
  //********TEST TAB FOR CHAT WITH DRIVER *********************//

  //********TEST TAB FOR CUSTOMER SUPPORT *********************//

  function Support() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
  //********TEST TAB FOR CUSTOMER SUPPORT  *********************//



export default function Dashboard({ navigation }) {
    
    return (
    

          <Tab.Navigator  activeColor="#949494" style={styles.tabnavi} barStyle={{ backgroundColor: '#FFFFFF' }}>
          <Tab.Screen name="Home" component={Homescreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}/>
         <Tab.Screen name="MyRides" component={MyRides}  options={{
          tabBarLabel: 'Rides',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="car" color={color} size={26} />
          ),
        }}/>

        <Tab.Screen name="Wallet" component={Wallet}  options={{
          tabBarLabel: 'Payments',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="card-text" color={color} size={26} />
          ),
        }}/>

<Tab.Screen name="Promo" component={Promo}  options={{
          tabBarLabel: 'Promo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet-giftcard" color={color} size={26} />
          ),
        }}/>
<Tab.Screen name="Chat" component={Chat}  options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message-settings" color={color} size={26} />
          ),
        }}/>

        <Tab.Screen name="Support" component={Support} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="equal" color={color} size={26} />
          ),
        }} />   
      </Tab.Navigator>
     
    );
  }
  
const styles = StyleSheet.create({
    container: {
      position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
    margin:0,
    padding:0,
    
    }, 
    tabnavi:{
        width:'100%',
        backgroundColor: '#FC6713',
    }
     
   
});

