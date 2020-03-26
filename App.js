import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

import Header from './components/Header'
import LoginPrompt from './screens/Login'
import Home from './screens/Home'
import getPermissions from './modules/PermissionHandler'

export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
	const [loggedIn, setLoggedIn] = useState(true);
	var [loading, setLoading] = useState(false);

  function loginHandler() {
		setLoading(true);
		setTimeout(()=>{
			setLoading(false);
			setLoggedIn(true);
		}, 5000)
    console.log("logged in");
  }
  
  function logoutHandler() {
		setLoggedIn(false);
    console.log("logged out");
  }

  // TODO: only run on app start
	getPermissions();
	
	if(loggedIn){
		return (
			<View style={styles.screen}>
				<Header
					title="Parachute"
					onLogout={logoutHandler} />
				<Home />
			</View >
		);
	}
	if(loading){
		return(
				<View style={styles.loadingscreen}>
					<Text style={styles.title}>Parachute</Text>
					<ActivityIndicator
							animating={true}
							color="#3D5A80"
							size="large"
							style={styles.loadingindicator}
					/>
				</View>
			)
	}
	return(
		<View style={styles.screen}>
        <LoginPrompt 
          onLogin={loginHandler} />
      </View >
	)
}

// Styles:
const styles = StyleSheet.create({
  screen: {
    flex: 1,
	},
	loadingscreen:{
		flex: 1,
		alignItems: "center",
	},
	loadingindicator: {
		flex: 1,
		alignSelf: "center",
	},
	title: {
		marginTop: 100,
    color: '#3D5A80',
    fontSize: 40,
	}
});
