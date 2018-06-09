import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Button } from './components/common';

class App extends Component {

    render() {
       return(
           <View>
               <Header headerText="Authentication"></Header>
               <Text>An app</Text>
           </View>    
       );
    }
}

export default App;