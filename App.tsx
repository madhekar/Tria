import React, {useEffect, useCallback, useState} from 'react';
import {View, StyleSheet, Text, ActivityIndicator, Alert} from 'react-native';
//custom font
//import { AppLoading} from "expo-app-loading";
import  {useFonts} from "expo-font";
//import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import usFonts from './components/Custom/LoadFonts';

//react navigation
import RootStack from './navigators/RootStack';
import Welcome from './screens/Welcome';
//import { Provider } from 'react-native-paper';

import { Provider } from 'react-redux';
import { store } from './components/State/store';

/* export default function App() {

 let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
  });
  if (!fontsLoaded){
    return (
    <AppLoading />);
  } 
  return (
    <RootStack />
  );
}; */

/*  class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'Lato-Bold': require("./assets/fonts/Lato-Bold.ttf"),
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
    })
    this.setState({ fontLoaded: true });
    this.defaultFonts();
  }
  render(){
    // if (!this.state.fontLoaded){
    //   return (
    //   <AppLoading />);
    // }
    return(
      <RootStack />
    );
  }
}  */

/* const styles = StyleSheet.create({
  text: {
     fontFamily: 'Lato-Bold' ,'Lato-Regular'
  }
});  
*/

/* export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require("./assets/fonts/Lato-Bold.ttf"),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return  <RootStack />;
}  */

 class App extends React.Component{

    state = {
      fontLoaded: false,
    };
    
   componentDidMount(){
    //Alert.alert("Starting App...")
    this.loadAssetsAsync()
   }

   async loadAssetsAsync() {
    await Font.loadAsync({
      'Lato-Bold': require("./assets/fonts/Lato-Bold.ttf"),
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf')
    })
    this.setState({ fontLoaded: true })
    //this.defaultFonts();
  }

  render(){
     if (!this.state.fontLoaded){
       return (
       <ActivityIndicator />);
     } 
    return(
      <Provider store = {store} >
        <RootStack />
      </Provider>
    );
  }
}  

/* export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await usFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {console.warn}}
      />
    );
  }
  return <RootStack />;
  } */


export default App;