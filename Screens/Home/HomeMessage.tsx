import React, { useState } from 'react';
import { View,Text, StyleSheet, TextInput } from 'react-native'; 

const HomeMessage=(props)=>{

    const [title, setTitle] = useState('Travel Only If Necessary');
    const [message, setMessage] = useState('Please wear your masks and obey all COVID-19 regulations. Health First, Stay Safe!!!');
  
    async function Notify(){
  
      let data = {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'same-origin',
        body: JSON.stringify({
          text:"nothing"
         
        }),
        
      }
      return fetch('https://beetletaxis.com/asset/xapis/notify.php', data)
              .then(response => response.json())  // promise
              .then(function(json){
                setTitle(json.data.title);
                setMessage(json.data.message);
              })
    }
    
    Notify();





return(
<View style={styles.container}>

    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{message}
</Text>
    {/* <Text style={styles.LearnMore}>Learn More </Text> */}
</View>



);  


};



const styles = StyleSheet.create({
    container: {
        height:'100%' ,
        width:'100%',
     backgroundColor:'#414141',
     padding:20,
     borderTopLeftRadius:14,
     borderTopRightRadius:14,
    
    }, title:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        marginBottom:5,


    },
    text:{
        color:'#fafafa',
        fontSize:12,
        marginBottom:5,

    },
    LearnMore:{
        fontSize:10,
        fontWeight:'bold',
        color:'#fff'
    }
     
   
});


export default HomeMessage;
