import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <TextInput style={{ height: 20, width: 100 }} />
                    </CardSection>   
                    
                    <CardSection>
                        <TextInput style={{ height: 20, width: 100 }} />
                    </CardSection>   
                    
                    <CardSection>
                        <Button>Log in</Button>
                    </CardSection>    
                </Card>
            </View>
        );
    }
}

export default LoginForm;