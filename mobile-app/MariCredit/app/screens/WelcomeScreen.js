import React from 'react';
import { ImageBackground, StyleSheet,View,Text, TouchableHighlight} from 'react-native';
import {
    useFonts,
    Pacifico_400Regular
  } from "@expo-google-fonts/dev";
  
function WelcomeScreen({navigation}) {
    return (
     <>
    <ImageBackground
    style={styles.background}
    source={require('../assets/bg1.jpg')}>
    </ImageBackground>
    <View style={styles.title}>
    <Text style={styles.text}>Welcome to MariCredit</Text>
    
    </View>
    <View 
    style={styles.loginButton}>
    <TouchableHighlight style={styles.loginButton} onPress={()=>navigation.navigate('LoginScreen')}>
    <Text style={styles.start}>GET STARTED</Text>
    </TouchableHighlight>
    </View>
    </>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    loginButton:{
       width:"100%",
       height:70,
       backgroundColor:"green",
       alignItems:"center",
       justifyContent:"center"
    },
    title:{
     position:"absolute",
     top:280,
     right:50,
     left:50,
     justifyContent:"center",
     alignItems:'center'
    },
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize: 40,
        fontFamily:"Lucida Handwriting"
      
    },
    start:{
        color:"white",
        fontWeight:"bold", 
        fontSize: 15,
    }
})
export default WelcomeScreen;