import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity,  KeyboardAvoidingView, Alert,BackHandler, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from "react-navigation";

export default class Login extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props){
    super(props);
    this.state =({
      email : '',
      password : '',
      activityIndicatorColor : 'rgba(230,29,76,1)',
      loginText : 'LOGIN',
      modalShow : false,
      selected: false,
      alert : false,
      firebaseError : false
    });

}
onSelect = data => {
    this.setState(data);
  };

  onPress = () => {
      const { navigate } = this.props.navigation;
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
      navigate("Signup", { onSelect: this.onSelect });
  };

  login=()=>{
    if (this.state.email == '' || this.state.password == '') {
      this.setState({
        alert : true
      });
    }
    else{

        this.setState({
          activityIndicatorColor : 'white',
          loginText : '',
          modalShow : true
        });

        const { navigate } = this.props.navigation;//pembuatan constanta pengenal variabel props navigasi.

          firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {

                //mendapatkan user id dari AsyncStorage.
                var userId = firebase.auth().currentUser.uid;
                var database = firebase.database().ref("users").child(userId);
                database.once('value',(snapshot)=>{

                  AsyncStorage.multiSet([
                    ["email", this.state.email],
                    ["password", this.state.password],
                    ["userId", userId],
                    ["username", snapshot.val().username]
                  ]);

                });
                this.setState({
                  modalShow : false
                });
                navigate('Dashboard');

            }).catch((error) => {

                this.setState({
                  firebaseError : true,
                  activityIndicatorColor : 'rgba(230,29,76,1)',
                  loginText : 'Login',
                  modalShow : false
                });
            });

    }

  }

componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backPressed);
}

componentDidUpdate=()=>{

    BackHandler.addEventListener('hardwareBackPress', this.backPressed);

}

componentWillUnmount() {
   BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
}

backPressed = () => {
  BackHandler.exitApp();
  return true;
}

	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={{uri: 'https://pbs.twimg.com/media/DPWWwRGU8AABN7Y.png'}}
				/>
				<Text style={styles.title}>- Aku, kamu, dia, kita, mereka, semua, semesta. Disini bersatu apa adanya. -</Text>
			</View>
			<View style={styles.formContainer}>
				<KeyboardAvoidingView behavior="padding" style={styles.inputcontainer}>
					<View style={styles.inputcontainer}>
						<TextInput
							placeholder="Email"
							placeholderTextColor="#FFFFFF"
							autoCapitalize="none"
							autoCorrect={false}
							onSubmitEditing={() => this.passwordInput.focus()}
							underlineColorAndroid='transparent'
							style={styles.input}
						  onChangeText={(email)=>this.setState({email})}/>
						<TextInput
							placeholder="Kata Sandi"
							placeholderTextColor="#FFFFFF"
							secureTextEntry
							ref={(input) => this.passwordInput = input}
							underlineColorAndroid='transparent'
							style={styles.input}
						  onChangeText={(password)=>this.setState({password})}/>

						<TouchableOpacity style={styles.buttonContainer} onPress={()=>this.login()}>
							<Text style={styles.buttonText}>{this.state.loginText}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonContainer} onPress={()=>this.onPress()}>
							<Text style={styles.buttonText}>REGISTRASI</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2980b9'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 300,
		height: 200
	},
	title: {
		color: '#000000',
		fontStyle: 'italic',
		marginTop: 1,
		width: 300,
		textAlign: 'center',
		opacity: 0.5
	},
	inputcontainer: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 20,
		borderRadius: 25,
		color: '#FFFFFF',
		paddingHorizontal: 10
	},
	buttonContainer: {
		backgroundColor: '#FFFFFF',
		borderRadius: 25,
		marginBottom: 15,
		paddingVertical: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#2980b9',
		fontWeight: 'bold'
	}
});
