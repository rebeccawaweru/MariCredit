import React, { useState } from 'react';
import { TouchableOpacity, View,StyleSheet,Text,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import client from '../api/client';

const ImageUpload = ()=> {
    const user = localStorage.getItem('id')
    const [profileImage, setProfileImage] = useState('')

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
                setProfileImage(response.uri)
                console.log(response)
            }
          
        }
    }
    const uploadProfileImage = async ()=>{

         const formData = new FormData()
         formData.append('profile', {
            name: new Date() + '_profile',
            uri: profileImage,
            type: 'image/jpg',
          });  
         try {
             const res = await client.post(`/auth/upload/${user}`, formData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                }
            })
            console.log(res.data)
          
         } catch (error) {
             console.log(error)
         }
       
    

    }
    return (
        <>
        <View style={styles.container}>
            <View>
                <TouchableOpacity onPress={openImageLibrary} style={styles.uploadBtn}>
                {profileImage ? <Image source={{uri:profileImage}} style={{width:"100%", height:"100%"}} />: <Text style={styles.uploadBtnText}>Upload Image</Text> }
                </TouchableOpacity>
                <Text style={styles.skip}>Skip</Text>
                {profileImage ? <Text
                onPress={uploadProfileImage}
                 style={[
                styles.skip,
                 {backgroundColor:"green",color:"white",
                 borderRadius:8 },
                ]}
                >Upload
                </Text> : null}
           
            </View>
        </View>
        </>
        
    );
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#fff',
    },
    uploadBtn:{
        height:125,
        width:125,  
        borderRadius:125/2,
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
export default ImageUpload;