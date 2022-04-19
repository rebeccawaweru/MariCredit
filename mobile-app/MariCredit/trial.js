import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, SafeAreaView,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight, Button,Platform, Dimensions} from 'react-native';

// import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function Trial() {
  // console.log(useDimensions())
  // console.log(useDeviceOrientation())
  // const {landscape} = useDeviceOrientation();
  const handlePress = ()=>console.log('hey')
  console.log(Dimensions.get('screen'))
  return (
    <>
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
   <View
    style={{
      backgroundColor: "dodgerblue",
      flex: 1,
    }}
   />
    <View
    style={{
      backgroundColor: "dodgerblue",
      flex: 1,
    }}
   />
    </View><SafeAreaView style={[styles.container, containerStyle]}>
        <Text onPress={handlePress}>Welcome to MariCredit</Text>
        <View style={{
          backgroundColor: 'dodgerblue',
          width: '100%',
          height: '30%',
        }}></View>
      // {/* <Image source={require('./assets/icon.png')}/> */}

        <TouchableWithoutFeedback onPress={() => console.log('image tapped')}>
          <Image source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/seed/picsum/200/300"
          }} />
        </TouchableWithoutFeedback>
        <View style={{
          flexDirection:"row",
          justifyContent:"space-between"
        }}>  
         {/* row-reverse */}
        <Button
          color="green"
          title='Login'
          onPress={() => Alert.alert("Confirm", "My Message", [
            { text: "Yes", onPress: () => console.log('Yes') },
            { text: "No", onPress: () => console.log('No') },
          ])} />
        <Button
          color="green"
          title='Signup'
          paddingTop="20px"
          onPress={() => alert("signup")} />
        </View>
     
        <Button
          color="green"
          title="Prompt"
          onPress={() => Alert.prompt("My title only ios", "My Message", text => console.log(text))} />
      </SafeAreaView></>
  );
}

const containerStyle={
  backgroundColor:"orange"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:Platform.OS === "android"? StatusBar.currentHeight:0
  },
});
