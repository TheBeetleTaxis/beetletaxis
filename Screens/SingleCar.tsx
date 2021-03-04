
 //********SINGLE CAR COMPONENT*********************//


 //********IMPORT MODULES*********************//



import React from 'react';
import { View,Text,Image,TouchableOpacity, StyleSheet, TextInput } from 'react-native'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

 //********IMPORT MODULES*********************//
const SingleCar=(props)=>{
   const {type}= props;




return(
<View style={styles.container}>

{/* IMAGE */}
<Image  style={styles.image} source={{uri: type.image }}></Image>

<View style={styles.middleContainer}> 
<Text style={styles.type}>{type.type}  <Ionicons name={'person'} size={12} ></Ionicons> 3</Text>

<Text style={styles.time}> 8:30PM dropoff</Text>
</View>
<View style={styles.rightContainer}>
    <Ionicons name='pricetag' size={18} color={'#42d742'}/></View>
<Text style={styles.price}>est. ₦{type.price}/km</Text>
</View>
 



);


};

const styles = StyleSheet.create({
    container: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems:'center',
padding:20,
backgroundColor:'#ffffff',
marginTop:2,
    
    },image:{
height:50, width:50,resizeMode:'contain',
    },middleContainer:{
flex:1,
marginHorizontal:10,
justifyContent:'space-between',
    },type:{
fontWeight:'bold',
fontSize:12,
marginBottom:5,
    },time:{
        color:'#5d5d5d',
        fontSize:12,
    },rightContainer:{
width:100,
justifyContent:'flex-end',
flexDirection:'row',
    },price:{
            fontWeight:'bold',
            fontSize:12,
            marginLeft:3,
    }

   
});

export default SingleCar;

