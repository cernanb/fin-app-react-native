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

  handleLogin = formData => this.props.login(formData, this.props.navigation.navigate)

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.loginTitle}>Login</Text>
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
    flexGrow: 1,
    alignItems: 'stretch',
    backgroundColor: '#3498db',
    justifyContent: 'center',
    padding: 15
  },
  loginTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
});