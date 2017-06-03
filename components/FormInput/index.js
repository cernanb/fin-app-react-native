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
                <Text style={styles.errorText}>{error}</Text>
                :
                <Text>{label}</Text>
            }
            <TextInput
                style={styles.textInput}
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
    },
    textInput: {
        height: 30,
        fontSize: 20,
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        borderRadius: 3,
        width: 300,
        marginBottom: 5,
    },
    errorText: {
        color: 'red',
        marginBottom: 3,
    }
});
 
export default FormInput;