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
                null
            }
            <TextInput
                style={styles.textInput}
                onChangeText={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                placeholder={label}
                placeholderTextColor="rgba(255,255,255,0.8)"
                secureTextEntry={secureTextEntry}
                returnKeyType="next"
                value={value}
                {...restInput}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.2)',
        borderRadius: 3,
        width: 300,
        paddingHorizontal: 10,
        color: 'white',
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        marginBottom: 3,
    }
});
 
export default FormInput;