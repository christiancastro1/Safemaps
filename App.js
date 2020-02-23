/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import {Image,StyleSheet,View,Text,ScrollView, Dimensions, ImageBackground} from 'react-native';
 import {Header,Colors} from 'react-native/Libraries/NewAppScreen';
 import { createStackNavigator } from 'react-navigation-stack';
 import { createAppContainer} from 'react-navigation';
 import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

 import Homepage from './src/Onboard/Homepage';
 import Signup from './src/Onboard/Signup';
 import SignIn from './src/Onboard/SignIn';
 import Map from './src/Map/Map';
import { SafeAreaView } from 'react-native-safe-area-context';


 const App: () => React$Node=() => {
   return (
     <>
       <AppContainer/>
     </>
   );
 };
 const CustomDrawerComponent = (props) => (
   <SafeAreaView style = {{flex:1}}>
     <View style={{height:150, backgroundColor:'white',justifyContent:'center', alignContent:'center', alignItems:'center'}}>
     <ImageBackground source ={require('./src/assets/proflogo.png')} style={styles.images}>  
      <Text></Text>
     </ImageBackground>
    </View>
     <ScrollView>
       <DrawerItems {...props}/>
     </ScrollView>

   </SafeAreaView>

 )
 
 const DrawerMenu = createDrawerNavigator({Map : {screen : Map}},
  {contentComponent: CustomDrawerComponent});

const SideNavigator = createAppContainer(DrawerMenu);

 const AppNavigator = createStackNavigator({
   Home: {screen: Homepage,navigationOptions: {headerShown: false,}},
   Signup:{screen: Signup ,navigationOptions:{headerShown:false}},
   SignIn:{screen: SignIn, navigationOptions:{headerShown:false}},
   SideMenu:{screen: SideNavigator, navigationOptions:{headerShown:false, gestureEnabled: false,}}, 
   initialRouteName: "Home",
 });

 const AppContainer = createAppContainer(AppNavigator);

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center'},
   images: {
     width:120,
     height:120,
     
     }

   });

 export default App;
