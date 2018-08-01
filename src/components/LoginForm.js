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

        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {

            })
            .catch((reason) => {
                console.log(reason);
                this.createAnAccount(email, password);
            });
    }

    /**
     * Create user account
     * @param {*} email 
     * @param {*} password 
     */
    createAnAccount(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch((reason) => {
                console.log(reason);
                // Re-render component and show error.
                this.setState({ error: 'Authentication failed.' });
            });
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