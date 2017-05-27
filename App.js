import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import {
  createStore, 
  applyMiddleware,
  combineReducers
} from 'redux'
import { Provider, connect } from 'react-redux'
import { reducer as form } from 'redux-form'
import thunk from 'redux-thunk'
import store from './redux/store'
import AppNavigator from './components/AppNavigator'

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
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent("FIN_APP_REACT_NATIVE", () => Root)

export default Root

