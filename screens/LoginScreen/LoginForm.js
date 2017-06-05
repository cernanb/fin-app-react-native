import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native'
import { Field, reduxForm } from 'redux-form'

import FormInput from '../../components/FormInput'

const validate = values => {
  const errors = {}

  if (!values.username) {
    errors.username = "Username must be filled in!"
  }

  if (!values.password) {
    errors.password = "Passworrd must be filled in!"
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters in length!"
  }
  console.log("errors: ", errors)

  return errors
}

class LoginForm extends Component {

  submit = formData => this.props.onSubmit(formData)

  render() {
    const { handleSubmit, submitting } = this.props

    return (
      <View style={styles.container}>
        <Field 
          label="Username"
          name="username"
          secureTextEntry={false}
          component={FormInput} />
        <Field 
          label="Password"
          secureTextEntry={true}
          name="password"
          component={FormInput} />
        <Button
          title="Login"
          disabled={submitting}
          onPress={handleSubmit(this.submit)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
})

export default reduxForm({
  form: 'login',
  validate
})(LoginForm)