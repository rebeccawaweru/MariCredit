import React, { useRef,useEffect } from 'react';
import {
View,
StyleSheet,
Text,
ScrollView,
Animated,
Dimensions,
ImageBackground
}
 from 'react-native'
import FormHeader from '../components/FormHeader';
import FormSelectorButton from '../components/FormSelectorButton';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import axios from 'axios'

const {width} = Dimensions.get('window')
function LoginScreen({navigation}) {
    const animation= useRef(new Animated.Value(0)).current;
    const scrollView = useRef();

    const fetchApi=async()=>{
        try {
        const res = await axios.get("http://localhost:5000/maricredit/auth")
        console.log(res.data)   
        } catch (error) {
           console.log(error) 
        }
    }

    useEffect(()=>{
    fetchApi()
    },[])

    const rightHeaderOpacity = animation.interpolate({
        inputRange:[0,width],
        outputRange:[1,0]
    })
    const leftHeaderTranslateX = animation.interpolate({
        inputRange:[0,width],
        outputRange:[0, 40]
    })
    const rightHeaderTranslateY = animation.interpolate({
        inputRange:[0,width],
        outputRange:[0, -20]
    })
    const loginColorInterpolate = animation.interpolate({
        inputRange:[0,width],
        outputRange:["green", "black"]
    })
    const signupColorInterpolate = animation.interpolate({
        inputRange:[0,width],
        outputRange:["black", "green"]
    })
    
    return (
  <ImageBackground
   style={styles.container}
    source={require('../assets/bg1.jpg')}>
         <View style={{flex:1, paddingTop:120}}>
           <View style={{height:80}}>
           <FormHeader
           leftHeading="Welcome "
           rightHeading="Back"
           subheading="MariCredit"
            rightHeaderOpacity={rightHeaderOpacity}
            leftHeaderTranslateX={leftHeaderTranslateX}
            rightHeaderTranslateY={rightHeaderTranslateY}
           />
           </View>
           <View style={{flexDirection:"row", paddingHorizontal:20, marginBottom:20}}>
               <FormSelectorButton
                backgroundColor={loginColorInterpolate} 
                style={styles.borderLeft} title='Login'
                onPress={()=>scrollView.current.scrollTo({x:0})}/>

               <FormSelectorButton style={styles.borderRight} backgroundColor={signupColorInterpolate} title='Signup'
               onPress={()=>scrollView.current.scrollTo({x:width})}/>

           </View>
           <ScrollView
           ref={scrollView}
           horizontal pagingEnabled showsHorizontalScrollIndicator={false}
           scrollEventThrottle={16}
           onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: animation } } }],
            { useNativeDriver: false }
          )}
           >
             <LoginForm navigation={navigation} />
        <ScrollView>
          <SignupForm navigation={navigation} />
        </ScrollView>
      </ScrollView>
       </View>
       </ImageBackground>
       
      
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    borderLeft:{
        borderTopLeftRadius:8,
        borderBottomLeftRadius:8,
    },
    borderRight:{
        borderTopRightRadius:8,
        borderBottomRightRadius:8
    }
})

export default LoginScreen;
