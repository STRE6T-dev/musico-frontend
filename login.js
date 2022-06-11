import * as React from 'react';
import {StyleSheet, View, Text,TextInput,Button,Image,Pressable} from 'react-native';
import Constants from 'expo-constants';

	
export default class LoginApp extends React.Component{
	state = {
		username: '',
		password: '',
		isFormValid: false,
	}

	componentDidUpdate(prevProps,prevState){
		if(this.state.username !== prevState.username ){
			this.validateForm
		}
	}

	getHandler = key =>val => {
		this.setState({[key]: val})
	}

	handleSubmit= () =>{
		console.log("Working ${this.state.username.length}",this.state.username.length)
		if(this.state.username.length > 0 && this.state.password.length >= 8)
		{
			fetch('http://localhost:8080/api/login',{
				method: 'POST',
				headers: {'content-type': 'application/json'},
				body: JSON.stringify({username: this.state.username,password:this.state.password})
			})
			console.log("Submitting")
		}else{

			console.log("Error happend")
		}


	}

	validateForm(){
		if(this.state.username.length > 0 && this.state.password.length > 8){
			this.setState({
				isFormValid: false,
			})}
			else{
				this.setState({
					isFormValid: true,
				})
			}
					   
	}

	render(){
		return(
			<View style={styles.appContainer}>
				<Image	style={styles.image}
					source={require('./login.png')} />

				<Text style={{marginBottom: 30,color: 'white',fontSize: 26}}>Login</Text>			

				<TextInput
					style={styles.input} 
					onChangeText= {this.getHandler("username")}
					value = {this.state.username}
					placeholder="Type username"/>

				<TextInput style={styles.input}
					onChangeText= {this.getHandler("password")}
					value = {this.state.password}
					placeholder="Type passsword"/>

				 <Pressable style={styles.button} onPress={this.handleSubmit} disabled={this.state.isFormValid}>
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
