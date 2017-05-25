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

// Grab a list of screens 
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'

// Add Screen to stack
const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen }
})

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))
const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}
const reducers = combineReducers({
  form,
  nav: navReducer
})
const middleware = [thunk]
const store = createStore(
  reducers, 
  applyMiddleware(...middleware)
)

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

