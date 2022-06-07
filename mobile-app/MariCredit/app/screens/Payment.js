import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {View,StyleSheet,TouchableOpacity,Text,ImageBackground} from 'react-native'
import FormContainer from '../components/FormContainer'
import FormInput from '../components/FormInput'
import FormSubmitButton from '../components/FormSubmitButton';

function Payment() {
    const [amount,setAmount] = useState(0);
    useEffect(()=>{
        client.get('/auth/'+user)
        .then((response)=>{
         localStorage.setItem('phone',response.data.user.phonenumber)
      })
    },[])
      useEffect(()=>{
          client.get("/loans/userloans/"+localStorage.getItem('phone')+"/"+user)
          .then((response)=>{
            setLoandata(response.data.loan)
        })
      .catch((error)=>{
          console.log(error)
      });
      },[])
  
    const createpayment =(req,res)=>{
        const stkURL = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
        let data = {
        BusinessShortCode:"174379",    
        Password:"MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMTYwMjE2MTY1NjI3",   
        Timestamp:"20160216165627",    
        TransactionType: "CustomerPayBillOnline",    
        Amount:{amount},    
        PartyA:"254702742458",    
        PartyB:"174379",    
        PhoneNumber:"254702742458",    
        CallBackURL:"https://maricredit.herokuapp.com/maricredit/auth/stk/response",    
        AccountReference:"MariCredit",    
        TransactionDesc:"lipa na Mpesa"    
        }
        axios.post("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest").then(response=>res.send(response.data));
    }

   
     
    return (
<ImageBackground
style={styles.container}
source={require('../assets/bg1.jpg')}>
<FormContainer>
<View style={{justifyContent:"center", alignItems:"center", marginTop:"50%"}}>
  
    <View style={{marginBottom:"15px"}}>
    <Text style={{fontSize:"20px"}}>Loan Balance:{" "}
    <span style={{fontWeight:"bold"}}>
    3000
    </span>
    </Text>
    </View>
    <View style={{marginBottom:"15px"}}>
    <Text style={{fontSize:"20px"}}>
        Start Date:{" "}
        <span style={{fontWeight:"bold"}}>
        5/15/2022
    </span>
    </Text>
    </View>
    <View style={{marginBottom:"15px"}}>
    <Text style={{fontSize:"20px"}}>
        Due Date:{" "}
        <span style={{fontWeight:"bold"}}>
        5/15/2022
    </span>
    </Text>
    </View>

    <View style={{marginBottom:"15px"}}>
    <Text style={{fontSize:"20px"}}>
        Penalty:
        <span style={{fontWeight:"bold",color:"red"}}>
        KES 200
    </span> 
    </Text>
    </View>
<FormInput
onChangeText={(amount)=>setAmount(amount)}
label='Enter amount you wish to pay'
placeholder=''
autoCapitalize="none" />
<FormSubmitButton title="Pay" onPress={createpayment} width="90%"/>
</View>
</FormContainer>
</ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default Payment;