import * as React from 'react';
import {StyleSheet, View, Text,TextInput,Button,Image,Pressable} from 'react-native';
import Constants from 'expo-constants';
import MainScreen from './screens/main'
	
export default class LoginScreen extends React.Component{
	state = {
		username: '',
		password: '',
		err: '',
		isFormValid: false,
	}

	componentDidUpdate(prevProps,prevState){
		if(this.state.username !== prevState.username ){
			this.handler
		}
	}

	getHandler = key =>val => {
		this.setState({[key]: val})
	}

	_login = async () => {
		try{
			const success = await login(this.state.username,this.state.password)
			this.props.navigation.navigate('Main')
		}catch(err){
			const errMessage = err.message
			this.setState({err: errMessage})
		}
	}



	render(){
		return(
			<View style={styles.appContainer}>
				<Image	style={styles.image}
					source={require('./login.png')} />
				<Text style={styles.error}>{this.state.err} </Text>

				<Text style={{marginBottom: 30,color: 'white',fontSize: 26}}>Login</Text>			

				<TextInput
					style={styles.input} 
					onChangeText= {this.getHandler("username")}
					value = {this.state.username}
					placeholder="Type username"/>

				<TextInput style={styles.input}
					onChangeText= {this.getHandler("password")}
					value = {this.state.password}
					secureTextEntry={true}
					placeholder="Type passsword"/>

				 <Pressable style={styles.button} onPress={this._login} disabled={this.state.isFormValid}>
			     	 <Text style={styles.text}>Login</Text>
   				 </Pressable>

				<Text>Or</Text>
				
				<Pressable style={styles.button}>
					<Text style={styles.text}>Sign Up </Text>
				</Pressable>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	image:{
		width: 70,
		height: 70,
		resizeMode: 'stretch',
		marginBottom: 30,
	},
	error:{
		color: 'red'
		fontSize: 10
	}

	text: {
		color: 'white'
	},

	appContainer:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#151561',
	},

	button: {
		alignItems: 'center',
		width: 200,
		height: 50,
		backgroundColor: '#0f9df5',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 25,
		paddingBottom: 15
	},

	input: {
		alignItems: 'center',
		width: 300,
		height: 40, 
		backgroundColor: '#151561',
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderColor: '#0f9df5',
		borderWidth: 1,
		borderRadius: 25,
		fontSize: 16,
		marginBottom: 30,
	},





})
