import React from 'react';
import { StyleSheet, Text, AsyncStorage, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, BackHandler } from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from "react-navigation";

export default class Signup extends React.Component {
	static navigationOptions = {
		header: null
	};
	  constructor(props){
	    super(props);
	    this.state =({
	      username : '',
	      password : '',
	      repassword : '',
	      email : '',
	      buttonText : 'Sign Up',
	      fullName : '',
	      alert : false,
	      buttonText : 'Sign Up',
	      activityIndicatorColor : 'rgba(230,29,76,1)'
	    });
	}

	componentWillMount() {
	    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
	}

	componentWillUnmount() {
	   BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
	}

	backPressed = () => {
	  const { navigation } = this.props;
	  navigation.goBack();
	  navigation.state.params.onSelect({ selected: true });
	  return true;
	}

	signUp=()=>{
	  if (this.state.password != this.state.repassword || this.state.email == '' || this.state.password == '' ||  this.state.repassword == '' ||  this.state.username == '' ||  this.state.fullName == '' ) {
	    this.setState({
	      alert : true
	    });
	  }
	  else{

	    this.setState({
	      activityIndicatorColor : 'white',
	      buttonText : ''
	});

	firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(() => {
	      var userId = firebase.auth().currentUser.uid;
	      AsyncStorage.multiSet([
	          ["email", this.state.email],
	          ["password", this.state.password],
	          ["userId", userId]
	        ]);
	      this.writeToDatabase(userId);
	    }).catch((error) => {
	        alert("error " + error.message );
	    });
	  }

	}

	writeToDatabase = (userId) => {
	  let today = new Date();
	  let Times = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	  let sortTime = -1*today.getTime();
	  var database = firebase.database().ref("users").child(userId);
	  database.set({
	    userId : userId,
	    sortTime : sortTime,
	    createdAt : Times,
	    email : this.state.email,
	    username :this.state.username,
	    fullName : this.state.fullName
	  }).then((snapshot)=>{

	     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {

	        AsyncStorage.multiSet([
	          ["email", this.state.email],
	          ["password", this.state.password],
	          ["userId", userId],
	          ["username", this.state.username]
	        ]);

	      const { navigate } = this.props.navigation;
	      navigate('Login');

	      }).catch((error) => {
	          alert("error " + error.message );

	      });

	  });

	}
	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.container}>
			<View style={styles.signupform}>
				<Text style={styles.header}>DAFTAR AKUN</Text>

				<TextInput
					style={styles.textinput}
					placeholder="Email"
					placeholderTextColor="#FFFFFF"
					underlineColorAndroid={'transparent'}
					onSubmitEditing={() => this.usernameInput.focus()}
					onChangeText={(email)=>this.setState({email})}/>

				<TextInput
					style={styles.textinput}
					placeholder="Username"
					placeholderTextColor="#FFFFFF"
					underlineColorAndroid={'transparent'}
					ref={(input) => this.usernameInput = input}
					onSubmitEditing={() => this.nameInput.focus()}
					onChangeText={(username)=>this.setState({username})}/>

				<TextInput
					style={styles.textinput}
					placeholder="Name"
					placeholderTextColor="#FFFFFF"
					underlineColorAndroid={'transparent'}
					ref={(input) => this.nameInput = input}
					onSubmitEditing={() => this.passwordInput.focus()}
					onChangeText={(fullName)=>this.setState({fullName})}/>

				<TextInput
					style={styles.textinput}
					placeholder="Password"
					placeholderTextColor="#FFFFFF"
					secureTextEntry
					underlineColorAndroid={'transparent'}
					ref={(input) => this.passwordInput = input}
					onSubmitEditing={() => this.conpasswordInput.focus()}
					onChangeText={(password)=>this.setState({password})}/>

					<TextInput
						style={styles.textinput}
						placeholder="Konfirmasi Password"
						placeholderTextColor="#FFFFFF"
						secureTextEntry
						underlineColorAndroid={'transparent'}
						ref={(input) => this.conpasswordInput = input}
						onChangeText={(repassword)=>this.setState({repassword})}/>

				<TouchableOpacity style={styles.button} onPress={()=>this.signUp()}>
					<Text style={styles.btntext}>{this.state.buttonText}</Text>
				</TouchableOpacity>

			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#2980b9',
		paddingLeft: 60,
		paddingRight: 60
	},
	signupform: {
		alignSelf: 'stretch'
	},
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
		paddingBottom: 15,
		marginBottom: 40
	},
	textinput: {
		alignSelf: 'stretch',
		backgroundColor: 'rgba(255,255,255,0.2)',
		height: 40,
		marginBottom: 30,
		color: '#FFFFFF',
		paddingHorizontal: 10
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		borderRadius: 25,
		padding: 15,
		backgroundColor: '#fff',
		marginTop: 30,
	},
	btntext: {
		color: '#000000',
		fontSize: 15,
		fontWeight: 'bold'
	}
});
