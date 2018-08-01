import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { email: '', password: '' }

    onLoginPressed() {
        
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@domain.com"
                        label="Email"  
                        value={this.state.email}
                        onChangeText={ text => this.setState({ email: text }) }
                    />
                </CardSection>   
                
                <CardSection>
                    <Input  
                        placeholder="Your secret"
                        label="Password"
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password: password }) }
                        secureTextEntry={true}
                    />
                </CardSection>   
                
                <CardSection>
                    <Button oPress={this.onLoginPressed.bind(this)}>Log in</Button>
                </CardSection>    
            </Card>
        );
    }
}

export default LoginForm;