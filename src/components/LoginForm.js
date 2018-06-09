import React, {Component} from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {

    render() {
        return (
            <View>
                <Card>
                    <CardSection>

                    </CardSection>   
                    
                    <CardSection>

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