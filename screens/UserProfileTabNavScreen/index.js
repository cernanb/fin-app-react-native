import { TabNavigator } from "react-navigation"
import UserProfileScreen from '../UserProfileScreen'
import AccountsScreen from '../AccountsScreen'
import LiabilitiesScreen from '../LiabilitiesScreen'

export default TabNavigator({
  Profile: { screen: UserProfileScreen },
  Accounts: { screen: AccountsScreen },
  Liabilities: { screen: LiabilitiesScreen }
});