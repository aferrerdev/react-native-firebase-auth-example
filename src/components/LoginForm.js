import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false }

    /**
     * On Login button pressed
     */
    onLoginPressed() {
        const { email, password } = this.state;
        // Reset error and loading state
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((reason) => {
                console.log(reason);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    /**
     * On login success method
     */
    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            error: '',  
            loading: false
        })
    }

    /**
     * On login fail 
     * @param {*} reason 
     */
    onLoginFail(reason) {
        console.log(reason);
        // Re-render component and show error.
        this.setState({ error: reason.message, loading: false });
    }

    /**
     * This method will render the login button if 'loading' flag
     * in state is false.
     */
    renderButton() {
        // If loading is active show spinner
        if (this.state.loading) {
            return <Spinner size="small" />;
        }
        // Otherwise show login button
        return (
            <Button
                onPress={this.onLoginPressed.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@domain.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="Your secret"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password: password })}
                        secureTextEntry={true}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        color: 'red',
        fontSize: 20
    }
}

export default LoginForm;