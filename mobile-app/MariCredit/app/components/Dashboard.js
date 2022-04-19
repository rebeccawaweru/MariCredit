import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native'
import {createDrawerNavigator, DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';

function Loans(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>Tasks</Text>
        </View>
    )
}

const Drawer= createDrawerNavigator();

const CustomDrawer = (props)=>{
  return(
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
      <View style={{
      flexDirection:"row", 
      justifyContent:"space-between", 
      alignItems:"center",
      backgroundColor:"whitesmoke",
      padding:20,
      marginBottom:20
      }}>
    <View>
        <Text>John Doe</Text>
        <Text>John@gmail.com</Text>
    </View>
    <Image source={{uri:"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}} style={{width:60, height:60, borderRadius:30}}/>
        </View>
      <DrawerItemList {...props} />
     </DrawerContentScrollView> 
     <TouchableOpacity style={{
         position:"absolute",
         right:0,
         left:0, 
         bottom:0, 
         backgroundColor:"green",
         padding:20
         }}>
      <Text style={{textAlign:"center"}}>Logout</Text>
     </TouchableOpacity>
  
      </View>
  )
}
const DrawerNavigator = ()=>{
    return (
    <Drawer.Navigator
    screenOptions={{
        headerShown:"true",
        headerStyle:{
            backgroundColor:'green',
            elevation:0,
            shadowOpacity:0,
            color:'white'
        },
        headerTitleStyle: {
            color: 'white'
          },
        headerTitle:'MariCredit'
    }}
     drawerContent={(props)=><CustomDrawer {...props}/>}>
        <Drawer.Screen component={Home} name='Home'/>
        {/* <Drawer.Screen component={ApplyLoan} name='Apply for Loan'/> */}
    </Drawer.Navigator>
    )
}
export default function Dashboard({navigation}){
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}



