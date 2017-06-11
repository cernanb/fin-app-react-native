import React, { Component } from 'react'
import {
  Button,
  View, 
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import SignupForm from './SignupForm'
import { signup } from '../../redux/modules/Auth/actions'

class SignupScreen extends Component {
  static navigationOptions = {
    title: "Signup"
  }

  handleSignup = formData => this.props.signup(formData, this.props.navigation.navigate)

  render() {
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <Text style={styles.loginTitle}>Signup</Text>
        <SignupForm onSubmit={this.handleSignup} />
      </View>
    )
  }
}

export default connect(null, { signup })(SignupScreen)

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