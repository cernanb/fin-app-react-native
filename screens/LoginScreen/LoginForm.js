import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native'

import Label from '../../components/Label'
import Container from '../../components/Container'

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Container>
          <Label text="Username"/>
          <TextInput style={styles.textInput} />
        </Container>
        <Container>
          <Label text="Password" />
          <TextInput
              secureTextEntry={true}
              style={styles.textInput}
          />
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 80,
    fontSize: 30,
    backgroundColor: '#FFF'
  }
})