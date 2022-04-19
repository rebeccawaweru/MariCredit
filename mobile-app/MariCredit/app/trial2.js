import React, { useState } from 'react';
import {View,StyleSheet,Dimensions,Text} from 'react-native'
import { isValidEmail, isValidObjField, updateError,isValidPhone } from '../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';

const Validation1 = ()=> {
  const [userInfo,setUserInfo] = useState({
  fullname:'',
  email:'',
  phonenumber:0,
  password:'',
  confirmPassword:''
  })

  const [error,setError] = useState('')
  const{fullname,email,phonenumber,password,confirmPassword}= userInfo
  const handleOnChangeText=(value,fieldName)=>{
  setUserInfo({...userInfo,[fieldName]:value})
  console.log(userInfo)
  }
  const isValidForm=()=>{
    //checking for empty fields 
  if (!isValidObjField(userInfo))
    return updateError('Required all fields!', setError);
  //if name is valid with 3 or more characters
  if(!fullname.trim() || fullname.length < 5) return updateError('Invalid Name!',setError)
  //only valid email
  if(!isValidEmail(email)) return updateError('Invalid Email', setError)
  //validatephonenumber
  if(!isValidPhone(phonenumber)) return updateError('Invalid Phonenumber', setError)
  //password must have 6 or more characters
   if(!password.trim()|| password.length < 6)return updateError('Password is less than 6 characters!', setError)
  //passwords must match
  if(password !== confirmPassword) return updateError('Passwords do not match!', setError)
}
  const submitForm= (e)=>{
    e.preventDefault();

    if(!isValidForm()){
      console.log(userInfo)
    }
  }
    return (
  <FormContainer>
  {error ? <Text style={{color:'red', fontSize:18, textAlign:'center'}}>{error}</Text> : null}
  <FormInput
  value={fullname}
  onChangeText={value=>handleOnChangeText(value,'fullname')} 
  label='Full Name'
  placeholder='John Smith'
  autoCapitalize="none" 
  />

  <FormInput
  autoCapitalize="none" 
  label="Email"
  value={email} 
  onChangeText={value=>handleOnChangeText(value,'email')} 
  placeholder="example@gmail.com"/>

  <FormInput 
  label="Phone Number"
  value={phonenumber} 
  onChangeText={value=>handleOnChangeText(value,'phonenumber')} 
  placeholder="enter phone number"/>

  <FormInput 
  autoCapitalize="none" 
  secureTextEntry
  label="Password" 
  value={password} 
  onChangeText={value=>handleOnChangeText(value,'password')} 
  placeholder="*******"/>

    <FormInput autoCapitalize="none" 
    secureTextEntry 
    label="Confirm Password" 
    title="password"
    placeholder="********"
    value={confirmPassword}
    onChangeText={value=>handleOnChangeText(value,'confirmPassword')} />
    
   <FormSubmitButton onPress={submitForm} title='Signup'/>
    </FormContainer>
    );
}
const styles = StyleSheet.create({
      
})

export default Validation1;