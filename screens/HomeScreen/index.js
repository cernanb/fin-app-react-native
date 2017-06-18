import React, { Component } from 'react'
import {
    AsyncStorage,
    View, 
    Text, 
    Button,
    StyleSheet,
} from 'react-native'

const checkForToken = async(navigate) => {
    let token = await AsyncStorage.getItem('tokenKey')
    console.log('hi')
    if (token) {
      navigate('UserProfile')
    } 
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home"
  }

  componentDidMount() {
    checkForToken(this.props.navigation.navigate)
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
