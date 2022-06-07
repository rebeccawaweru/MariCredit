import 'react-native-gesture-handler'
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen'
import ImageUpload from './app/components/ImageUpload';
import Payment from './app/screens/Payment';
import LoginScreen from './app/screens/LoginScreen';
import Dashboard from './app/components/Dashboard'
import ProfilePage from './app/components/ProfilePage'
import { NavigationContainer } from '@react-navigation/native';
import ApplyLoan from './app/components/ApplyLoan'
import MyLoans from './app/components/MyLoans';
import EditProfile from './app/components/EditProfile';
import IdScreen from './app/screens/IdScreen';
import Home from './app/components/Home'
const Stack =  createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='EditProfile'>
     <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}
     options={{
      headerShown: false,
     }}/>
     <Stack.Screen name='LoginScreen' component={LoginScreen} options={{
       title:"",
       headerShown: true,
       headerTransparent: true,
       headerStyle :{
        borderBottomWidth: 0,
       }   

     }}
     />
     <Stack.Screen name='IdScreen' component={IdScreen} options={{
       headerShown:"true",
       headerStyle:{
           backgroundColor:'green',
           elevation:0,
           shadowOpacity:0,
          
       },
       headerTitleStyle: {
           color: 'white'
         },
       headerTitle:'Upload Original ID Photos' 

     }}
     />
     <Stack.Screen name='Payment' component={Payment} options={{
       headerShown: true,
       headerStyle :{
        backgroundColor:'green',
        elevation:0,
        shadowOpacity:0,
       },   
       headerTitleStyle: {
        color: 'white'
      },
    headerTitle:'Make Payment'  
     }}/>
     <Stack.Screen name='ApplyLoan' component={ApplyLoan}
     options={{
      headerShown:"true",
      headerStyle:{
          backgroundColor:'green',
          elevation:0,
          shadowOpacity:0,
         
      },
      headerTitleStyle: {
          color: 'white'
        },
      headerTitle:'Apply for a Loan'
    }}/>
       <Stack.Screen name='MyLoans' component={MyLoans}
     options={{
      headerShown:"true",
      headerStyle:{
          backgroundColor:'green',
          elevation:0,
          shadowOpacity:0,
          
      },
      headerTitleStyle: {
          color: 'white'
        },
      headerTitle:'My Loans'
    }}/>
     <Stack.Screen name='EditProfile' component={EditProfile}
     options={{
      headerShown:"true",
      headerStyle:{
          backgroundColor:'green',
          elevation:0,
          shadowOpacity:0,
          },
      headerTitleStyle: {
          color: 'white'
        },
      headerTitle:'Edit Profile'
    }}/>
    <Stack.Screen name='Dashboard' component={Dashboard}
    options={{ headerShown: false }} />
    </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
