import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

export default function loginPrompt(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const users = {
    "jnorthway": "test123",
    "test": "Password",
  };

  function usernameInputHandler(enteredText) {
    setUsername(enteredText);
  }

  function passwordInputHandler(enteredText) {
    setPassword(enteredText);
  }

  function loginHandler() {
    var current_user = username.toLowerCase()
    if(current_user in users && password === users[current_user]) {
      props.onLogin();
    }
    else {
      console.log("FAIL");
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.login}>
        <Text style={styles.loginText}>Parachute</Text>
      </View>
      <View style={styles.loginContainer}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          onChangeText={usernameInputHandler}
          value={username}
          onSubmitEditing={loginHandler} />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder='Password'
          onChangeText={passwordInputHandler}
          value={password}
          onSubmitEditing={loginHandler} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={loginHandler} style={styles.button} >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  login: {
		padding: 30,
		marginBottom: 20,
  },
  loginText: {
		color: '#187795',
		marginTop: 90,
    fontSize: 35,
	},
  input: {
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1,
    width: 300,
    padding: 5,
    marginBottom: 30
  },
  button: {
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: '#3D5A80',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
	},
	loginContainer:{
		flex: 1,
		marginTop: 50,
	}
})
