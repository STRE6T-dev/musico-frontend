import * as React from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native';
import {fetchPosts} from './api'

import {LoginScreen} from './screens/login'

export default class main extends React.Component{
	state = {
		posts: null,
	}
	componentDidMount(){
		this.getPosts()
	}
	const getPosts = async () =>(
		const results = await fetchPosts()
		this.setState({posts: results})
	}

	render(){
		return{
			<View>
				<Image/>
				<Text><Text>
				<Text><Text>
			</View>
		}
	}
}
