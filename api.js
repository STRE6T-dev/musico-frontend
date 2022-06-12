import * as React from 'react';

const ProcessPost = async =>(post) {
	title: post.title,
	description: post.description
}

export default class api extends React.Component {
	state= {
		site: 'http://localhost:8080'
	}
	export const login= async => (username,password){
		const response = await fetch('http://localhost:8080/api/login',{
			method: 'POST',
			headers: {'content-type': 'application/json'},
			body: JSON.stringify({username: username,password: password})
		})

		if(response.ok){
			const tokens = await response.json();
			//spilit for access and refresh tokens
			return true
		}else{
			const err_message = response.text();
			throw new Error(err_message)
		}

	}//END OF LOGIN
	export const register = async => (username,password,email){
		const response = await fetch('http://localhost:8080/api/signup',{
			method: 'POST',
			headers: {
				'Accept': 'application/json'
				"content-type": 'application/json'
			}

			body: JSON.stringify({username: username,
				password: password,
				email: email
			})
		})

		if(response.Created){
			return true
		}else{
			const err_message = response.text();
			throw new Error(err_message)
		}
	}//END OF REGISTER

	export  const fetchPost= async => (){
		const token = ''
		const response = await fetch('http://localhost:8080/api/posts',{
			method: 'GET',
			headers: {
				"Authorization" : `Bearer ${token}`
			}
		})
		if(response.ok){
			const {posts} = await response.json()
			return posts.map(processPosts)
		}
		
	}//END OF FETCH POST
	createPost(){}
	fetchPosts(){}
	fetchPostById(){}
	createComment(){}
	getComments(){}
	vote(){}

}
