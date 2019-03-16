import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import LoginScreen from './components/LoginScreen';
import ProfileScreen from './components/ProfileScreen';


const AppNavigator = createStackNavigator(
  {
    Home: {screen: LoginScreen},
    Profile: {screen: ProfileScreen},
    // Spendings: {screen: SpendingsScreen}
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: AppNavigator,
  }
);

const AppContainer = createAppContainer(TabNavigator);


export default class App extends React.Component{
  render(){
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput: {
    width: 80,
    height: 40,
    fontSize: 15,
    justifyContent: 'center',
  },
});
