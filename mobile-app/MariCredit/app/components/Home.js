import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity,StyleSheet} from 'react-native'

export default function Home(){
    return (
        <>
    <ImageBackground
    style={styles.background}
    source={require('../assets/bg1.jpg')}>
         <View style={{flexDirection:"row"}}>
             <TouchableOpacity style={styles.btn}>
                 <Text style={styles.title}>Apply for a loan</Text>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.btn, {marginLeft:20}]}>
                 <Text style={styles.title}>My Loans</Text>
             </TouchableOpacity>
         </View>
         <View style={{flexDirection:"row"}}>
         <TouchableOpacity style={styles.btn}>
                 <Text style={styles.title}>Make Payment</Text>
             </TouchableOpacity>
             <TouchableOpacity style={[styles.btn, {marginLeft:20}]}>
                 <Text style={styles.title}>My Payments</Text>
             </TouchableOpacity>
         </View>
         </ImageBackground>
        </>
     );
 }

 const styles = StyleSheet.create({
     btn:{
     width:150,
     height:200, 
     backgroundColor:"transparent", 
     marginTop:40,
     borderRadius:5,
     borderColor:"green", 
     borderWidth:1, 
     justifyContent:"center", 
     alignItems:"center" ,
     shadowColor:"black",
     shadowOpacity:1,
     shadowRadius:1,
     elevation:2,
     shadowOffset:{heigh:1, width:1}
     },
     background:{
         flex:1,
         justifyContent:"center",
         alignItems:"center"
     },
     title:{
        color:"white", 
        fontWeight:"bold", 
        fontSize:15   
     }
 })