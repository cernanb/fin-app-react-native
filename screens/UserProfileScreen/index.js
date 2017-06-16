import React, { Component } from 'react'
import {
    AlertIOS,
    AsyncStorage,
    Button,
    Text,
    View,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'

// TODO add TabNavigator with Profile buttons 

class Profile extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.user.username}'s Profile</Text>
            </View>
        )
    }
}

Profile.navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profile',
    headerLeft: (
        <Button //Todo abstract this into components to use in other screens
            title="Logout" 
            onPress={() => {
                AlertIOS.alert(
                    'Are you sure?',
                    null,
                    [
                        { 
                            text: 'Cancel', 
                            onPress: () => console.log('logout cancelled'),
                            style: 'cancel'
                        }, 
                        { 
                            text: 'Yes', 
                            onPress: async() => {
                                try {
                                    await AsyncStorage.removeItem('tokenKey')
                                    console.log(navigation.navigate('Login'))
                                } catch(error) {
                                    // Todo add notification that this failed
                                    console.log(error)
                                }
                            }
                        }
                    ]
                )
            }} 
        />
    )
})

export default connect(state => ({user: state.auth}), null)(Profile)