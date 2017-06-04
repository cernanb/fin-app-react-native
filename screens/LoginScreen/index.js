import React, { Component } from 'react'
import {
  Button,
  View, 
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'
import { login } from '../../redux/modules/Auth/actions'

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  }

  handleLogin = formData => this.props.login(formData, this.props.navigation)

  render() {
    return(
      <View style={styles.container}>
        <Text>Login</Text>
        <LoginForm onSubmit={this.handleLogin} />
        <Button 
          title="Create new account"
          onPress={() => console.log('got to signup page')}
        />
      </View>
    )
  }
}

export default connect(null, { login })(LoginScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});