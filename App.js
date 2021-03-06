import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { Provider, connect } from 'react-redux'
import AppNavigator from './components/AppNavigator'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    )
  }
}

const AppWithNavigationState = connect(
  state => ({
    nav: state.nav 
  })
)(App)

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppWithNavigationState />
        </View>
      </Provider>
    )
  }
}

AppRegistry.registerComponent("FIN_APP_REACT_NATIVE", () => Root)

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
