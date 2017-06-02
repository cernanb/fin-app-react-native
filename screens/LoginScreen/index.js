import React, { Component } from 'react'
import {
    View, 
    Text,
    StyleSheet 
} from 'react-native'

import LoginForm from './LoginForm'

class LoginScreen extends Component {
  static navigationOptions = {
    title: "Login"
  }

  render() {
    return(
      <View style={styles.container}><LoginForm /></View>
    )
  }
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});