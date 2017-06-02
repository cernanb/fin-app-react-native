import React, { Component } from 'react';
 
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';
 
const FormInput = ({
    label, secureTextEntry, input: { onChange, onBlur, onFocus, value, ...restInput }, meta: { touched, error, invalid, dirty }
}) => {
    return (
        <View>
            {touched && error ?
                <Text>{error}</Text>
                :
                <Text>{label}</Text>
            }
            <TextInput
                onChangeText={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                secureTextEntry={secureTextEntry}
                returnKeyType="next"
                value={value}
                {...restInput}
            />
        </View>
    );
}
 
const styles = StyleSheet.create({
    textLabel: {
        fontSize: 20,
        fontFamily: 'Verdana',
        marginBottom: 10,
        color: '#595856'
    }
});
 
export default FormInput;