import React, { useState } from 'react';
import {View,StyleSheet,Dimensions,Text,TextInput} from 'react-native'
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from './FormContainer';
import FormInput from './FormInput';
import FormSubmitButton from './FormSubmitButton';
import {Formik} from 'formik'
import * as  Yup from 'yup'
import client from '../api/client'
import jwt_decode from "jwt-decode";
const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email!').required('Email  is required'),
  password:Yup.string().trim().min(6,'password must have 6 or more characters').required('Password is required')
})
const LoginForm = ({navigation})=> {
const userInfo = {
  email:'',
  password:''
}
const login = async(values,formikActions)=>{
  navigation.navigate('ApplyLoan')
  try {
    const res = await client.post('/auth/login',{
       ...values
    });
    if(res.data.success){
      var token = res.data.token
      var decode = jwt_decode(token)
      localStorage.setItem('id', decode.id)
      console.log(decode.id)
    }
  } catch (error) {
    console.log(error.message)
  }
  formikActions.resetForm()
  formikActions.setSubmitting(false)
}
    return (
      <FormContainer>
       <Formik
         initialValues={userInfo} 
         validationSchema={validationSchema} 
         onSubmit={login}>
       {({
      values,
      errors,
      touched,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit})=>{
        const{email,password}= values
        return (
          <>
      <FormInput
      autoCapitalize="none" 
      label="Email"
      value={email} 
      error={touched.email && errors.email}
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
      placeholder="example@gmail.com"/>

      <FormInput 
      autoCapitalize="none" 
      secureTextEntry
      label="Password" 
      value={password} 
      error={touched.password && errors.password}
      onChangeText={handleChange('password')}
      onBlur={handleBlur('password')}
      placeholder="******" />

      <FormSubmitButton 
      submitting={isSubmitting}
      onPress={handleSubmit} 
      title='Login'/>
         </>
         )}}
       </Formik>
    </FormContainer>
    );
}


export default LoginForm;