import React, { useState,useEffect } from 'react';
import { TouchableOpacity, View,StyleSheet,Text,Image,ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import client from '../api/client';

const IdScreen = ({navigation})=> {
    const user = localStorage.getItem('id')
    const [profileImage, setProfileImage] = useState('')
    const [img, setImg] = useState('');
    const [frontId,setFrontId] = useState('');
    const [backId,setBackId] = useState('');
    const [frontImage,setFrontImage] = useState('');
    const [backImage,setBackImage] = useState('');

    const openImageLibrary = async ()=>{
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(status)
        if(status !== 'granted'){
            alert('Sorry we need camera roll permissions to upload photo')
        }
        if(status === 'granted'){
            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
              });
            if(!response.cancelled){
                setFrontImage(response.uri)
                console.log(response)
                let reader = new FileReader();
                reader.readAsDataURL(frontImage);
                if(read){
                 reader.onloadend = (e) =>{
                   setFrontId(e.target.result);
                 }
                }else{
                 console.log('Select image')
               }
      }}}

    const openImageLibrary1 = async ()=>{
    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(status)
        if(status !== 'granted'){
            alert('Sorry we need camera roll permissions to upload photo')
        }
        if(status === 'granted'){
            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
              });
            if(!response.cancelled){
                setBackImage(response.uri)
                console.log(response)
                let reader = new FileReader();
                reader.readAsDataURL(backImage);
                if(read){
                 reader.onloadend = (e) =>{
                   setBackId(e.target.result);
                 }
                }else{
                 console.log('Select image')
               }
            }
          
        }
    }
    const uploadProfileImage = async ()=>{
         try {
             const res = await client.put(`/auth/${user}`,{
                  frontavatar:frontId,
                  backavatar:backId,
            })
           if(res){
               navigation.navigate('Dashboard')
           }
          
         } catch (error) {
             console.log(error.message)
         }
    
    }
    return (
        <>
        <ImageBackground
       style={styles.container}
      source={require('../assets/bg1.jpg')}>
                <TouchableOpacity onPress={openImageLibrary} style={styles.uploadBtn}>
                {frontImage ? <Image source={{uri:frontImage}} style={{width:"100%", height:"100%"}} />: <Text style={styles.uploadBtnText}>Upload Front ID</Text> }
                </TouchableOpacity>

                <TouchableOpacity onPress={openImageLibrary1} style={styles.uploadBtn}>
                {backImage ? <Image source={{uri:backImage}} style={{width:"100%", height:"100%"}} />: <Text style={styles.uploadBtnText}>Upload Back ID</Text> }
                </TouchableOpacity>

                {frontImage&&backImage ? <Text
                onPress={uploadProfileImage}
                 style={[
                styles.skip,
                 {backgroundColor:"green",color:"white",
                 borderRadius:8 },
                ]}
                >Upload
                </Text> : null}
        </ImageBackground>
        </>
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff',
      justifyContent:"center",
      alignItems:"center"
    },
    uploadBtn:{
        height:200,
        width:200,  
        marginBottom:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        borderStyle:'dashed',
        borderWidth:1,
        overflow:"hidden"
    },
    uploadBtnText:{
        textAlign:"center",
        fontSize:16,
        opacity:0.3,
        fontWeight:"bold"
    },
    skip:{
        textAlign:"center",
        padding:10,
        fontSize:16,
        fontWeight:'bold',
        textTransform:'uppercase',
        letterSpacing:2,
        opacity:0.5

    }

})
export default IdScreen;