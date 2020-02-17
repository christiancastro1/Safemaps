/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React from 'react';
 import {Image,StyleSheet,View,Text,StatusBar,Button} from 'react-native';
 import {Header,Colors} from 'react-native/Libraries/NewAppScreen';
 import { createStackNavigator } from 'react-navigation-stack';
 import { createAppContainer } from 'react-navigation';

 import Homepage from './src/Onboard/Homepage';
 import Signup from './src/Onboard/Signup';
 import SignIn from './src/Onboard/SignIn';
 import Map from './src/Map/Map';

 const App: () => React$Node=() => {
   return (
     <>
       <AppContainer/>
     </>
   );
 };
 const AppNavigator = createStackNavigator({
   Home: {screen: Homepage,navigationOptions: {headerShown: false,}},
   Signup:{screen: Signup ,navigationOptions:{headerShown:false}},
   SignIn:{screen: SignIn, navigationOptions:{headerShown:false}},
   Map:{screen:Map, navigationOptions:{headerShown:false}}, 
   initialRouteName: "Home",
 });

 const AppContainer = createAppContainer(AppNavigator);

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center'}

   });

 export default App;
