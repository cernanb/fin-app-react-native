import AppNavigator from '../../../components/AppNavigator'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'))


export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}