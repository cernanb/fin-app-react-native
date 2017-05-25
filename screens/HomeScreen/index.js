import React, { Component } from 'react'
import {
    View, 
    Text, 
    Button,
    StyleSheet
} from 'react-native'

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  }

  render() {
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button 
          title="Login"
          onPress={() => navigate('Login')} />
      </View>
    )
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
