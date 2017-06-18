import { StackNavigator, addNavigationHelpers } from 'react-navigation'

// Grab a list of screens 
import HomeScreen from '../../screens/HomeScreen'
import LoginScreen from '../../screens/LoginScreen'
import UserProfileTabNavScreen from '../../screens/UserProfileTabNavScreen'
import SignupScreen from '../../screens/SignupScreen'

// Add Screen to stack
export default AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  ProfileTabNav: { screen: UserProfileTabNavScreen },
  Signup: { screen: SignupScreen },
})
