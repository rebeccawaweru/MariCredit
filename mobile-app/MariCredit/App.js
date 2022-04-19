import 'react-native-gesture-handler'
import { StyleSheet} from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/screens/WelcomeScreen'
import ImageUpload from './app/components/ImageUpload';
import LoginScreen from './app/screens/LoginScreen';
import Dashboard from './app/components/Dashboard'
// import { NavigationContainer } from '@react-navigation/native';
import ApplyLoan from './app/components/ApplyLoan'
import MyLoans from './app/components/MyLoans';
// const Stack =  createNativeStackNavigator();

export default function App() {
  return(
<MyLoans/>
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName='WelcomeScreen'>
    //  <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}
    //  options={{
    //   headerShown: false,
    //  }}/>
    //  <Stack.Screen name='LoginScreen' component={LoginScreen} options={{
    //    title:"",
    //    headerShown: true,
    //    headerTransparent: true,
    //    headerStyle :{
    //     borderBottomWidth: 0,
    //    }   

    //  }}
    //  />
    //  <Stack.Screen name='ApplyLoan' component={ApplyLoan}
    //  options={{
    //   title:"",
    //   headerShown: true,
    //   headerTransparent: true,
    //   headerStyle :{
    //    borderBottomWidth: 0,
    //   }   
    // }}/>

    // </Stack.Navigator>
    // </NavigationContainer>
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
