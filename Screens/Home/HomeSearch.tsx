import React from 'react';

import { View,Text,TouchableOpacity, StyleSheet, TextInput } from 'react-native'; 
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const HomeSearch=(props)=>{
return(
<View style={{height:'100%' ,width:'100%',}} >
        <TouchableOpacity style={styles.inputBox}  onPress={() => props.navigation.navigate('Ride')}>
            <Text style={styles.inputText}> Where To?</Text>
                <View style={styles.timeContainer}>
                    <AntDesign name="clockcircle" color={'#535353'}></AntDesign>
                    <Text style={styles.textwriteup}> Now </Text>
                    <MaterialIcons name="keyboard-arrow-down" size={16}></MaterialIcons>
                </View>

        </TouchableOpacity >
            {/* Previous Destination */}
            {/* <View style={styles.row}>

                <View style={styles.iconContainer}>
                 <AntDesign name="clockcircle" color={'#ffffff'} size={20}> </AntDesign>
                 </View>
<Text style={styles.DestinationText}> Spin Night Club</Text>
            </View> */}

{/* Home Destination */}
{/* 
<View style={styles.row}>

<View style={styles.iconContainertwo}>
 <Entypo name="home" color={'#ffffff'} size={20}> </Entypo>
 </View>
<Text style={styles.DestinationText}> Home</Text>
</View> */}



</View>



);  


};



const styles = StyleSheet.create({
    container: {

    
    },inputBox:{
            backgroundColor:'#d9d9d9',
            margin:10,
            padding:10,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
    },inputText:{
        fontSize:20, 
        fontWeight:'600',
        color:'#6e6e6e',
    },
    timeContainer:{

    flexDirection:'row',
    width:80,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:50,

    },
    textwriteup:{
        marginLeft:2,
        marginRight:2,
        marginBottom:2,
        fontSize:12,
    },
    row:{
        flexDirection:'row',
alignItems:'center',
borderColor:'#dbdbdb',
borderBottomWidth:1,
padding:20,
    },
    iconContainer:{
            backgroundColor:'gray',
            padding:9,
            width:39,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:25,
    },
    iconContainertwo:{
        backgroundColor:'#218cff',
        padding:9,
        width:39,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25,
},DestinationText:{
            marginLeft:9,
            fontWeight:'500',
            fontSize:16,

    }

   
});


export default HomeSearch;
