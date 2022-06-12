import * as React from 'react';
import {View,Button,TextInput,Text,StyleSheet,Pressable} from 'reactNative'
import {register} from './api'
export default class RegisterScreen extends React.Component{

	state = {
		username: '',
		password: '',
		email: '',
		isLoading: true,
		err: ''
	}

	getHandler= key => val => {
		this.setState({[key]: val})
	}

	_register = async =>(){
		try{
			const success = await register(this.state.username,this.state.password,this.state.email)
			//Send to login page
			this.props.navigation.navigate("Login")
		}catch(err){
			this.setState({
				err: err,
			})
		}
	}
	render(){
		return{
			<View style={styles.appContainer}>
				
				<Image style={styles.image}source='./login.png' />
				<Text style={styles.text}> Register </Text>
				<Text style={styles.err}>{this.state.err}<Text>
				<TextInput
				style={styles.input}
				onTextChange={this.getHandler("username")}
				placeHolder='username'
				value={this.state.username}
				/>

				<TextInput 
				style={styles.input}
				onTextChange={this.getHandler("password")}
				placeHolder="password"
				value={this.state.password}
				secureTextEntry= {true}
				/>

				<TextInput
				style={styles.input}
				onTextChange={this.getHandler("email")}
				placeHolder = "email"
				value={this.state.email}
				/>

				//button to register
				<Pressable style={styles.button} onPress={this._register}>
					<Text style={styles.text}>Register</Text>
				</Pressable>
			</View>
		}
	};
}
const styles = StyleSheet.create({
        image:{
                width: 70,
                height: 70,
                resizeMode: 'stretch',
                marginBottom: 30,
        },
        err:{
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


