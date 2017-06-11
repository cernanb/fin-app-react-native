import { AsyncStorage } from 'react-native'
import { reset } from 'redux-form'

const TOKEN_KEY = 'fin-token';

const setCurrentUser = formData => {
    return {
        type: 'SET_CURRENT_USER',
        currentUser: formData
    }
}

const updateStorageToken = async (dispatch, formData, navigate) => {
    try {
        dispatch({ type: 'SETTING_ASYNC_STORAGE_ITEM' })
        await AsyncStorage.setItem('tokenKey', TOKEN_KEY)
        dispatch(setCurrentUser(formData))
        dispatch(reset('login'))
        navigate('UserProfile')
    } catch(error) {
        console.log('You failed misserably with AsyncStorage', error)
        dispatch({ type: 'FAILED_ASYNC_STORAGE' })
    }
}

export const login = (formData, navigate) => {
    console.log('hi')
    return dispatch => updateStorageToken(dispatch, formData, navigate)
}

export const signup = (formData, navigate) => {
    console.log('hi')
    return dispatch => updateStorageToken(dispatch, formData, navigate)
}

