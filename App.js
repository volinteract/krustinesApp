import React, { Component } from 'react';
import { Alert, Button, Text, TouchableOpacity, Image, TextInput, View, StyleSheet } from 'react-native';
import Expo from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class LoginScreen extends Component {

    state = {
      email: '',
      password: '',
    };
  
  
  onLogin() {
    const { email, password } = this.state;

    Alert.alert('Credentials', `email: ${email} + password: ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
      <Image 
        style={{width: 150, height: 150}}
        source={require('./assets/VolinteractTransparent.png')}
      />
        <Text style={styles.titleText}>Volinteract</Text>
        <TextInput
          value={this.state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => this.setState({ email })}
          placeholder='email'
          placeholderTextColor = 'white'
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry={true}
          placeholderTextColor = 'white'
          style={styles.input}
        />
        
        // makes views respond properly to touches - button for login screen
        <TouchableOpacity
          style={styles.button}
          onPress= {() => {
            this.props.navigation.dispatch(stackActions.reset({
              index: 0,
              actions: [
              NavigationActions.navigate({
                routeName: 'Home' })
              ],
            }))
          }

          }
          //{this.onLogin.bind(this)}
       >
         <Text style={styles.buttonText}> Login </Text>
       </TouchableOpacity>
        
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1, alignItems: 'center', 
        justifyContent: 'center'
      }}>
      <Text>Welcome to your Volinteract Dashboard.</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
  }
  Home: {
    screen: HomeScreen,
  },
}, {
    initalRouteName: 'Login',
}); 

export default createAppContainer(AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8c8e2',
  },
  titleText:{
    fontFamily: 'Helvetica',
    fontSize: 50,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontFamily: 'Helvetica',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    fontFamily: 'Helvetica',
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 10,
  },
});