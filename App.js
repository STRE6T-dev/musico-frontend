import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import {createSwitchNavigator} from 'react-navigation';

import LoginScreen from "./screens/login";
import LogoutScreen from "./screens/logout";
import RegisterScreen from "./screens/register";
import MainScreen from "./screens/main";
import HighScoreScreen from "./screens/highScore";
import IndividualPostScreen from "./screens/individual";

const AppNavigator = createSwitchNavigator({
	Main: MainScreen,
	Login:LoginScreen,
	Register: RegisterScreen,
	Logout:LogoutScreen,
	HighScore: HighScoreScreen,
	IndivdualPost:IndividualPostScreen,
},{
	initialRouteName: 'Main',
})
		

export default class  App extends React.Component {

	render(){
		return(
			<AppNavigator />
			<LoginScreen />
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
