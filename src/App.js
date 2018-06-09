import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDBM-NZojDZ2RLd3X1csRdFBfFWK4cPwqQ',
            authDomain: 'react-auth-example-c222c.firebaseapp.com',
            databaseURL: 'https://react-auth-example-c222c.firebaseio.com',
            projectId: 'react-auth-example-c222c',
            storageBucket: 'react-auth-example-c222c.appspot.com',
            messagingSenderId: '768163761866'
          });
    }

    render() {
       return(
           <View>
               <Header headerText="Authentication"></Header>
               <LoginForm></LoginForm>
           </View>    
       );
    }
}

export default App;