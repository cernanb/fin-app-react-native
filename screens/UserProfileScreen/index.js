import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'

class Profile extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.user.username}</Text>
            </View>
        )
    }
}

export default connect(state => ({user: state.auth}), null)(Profile)