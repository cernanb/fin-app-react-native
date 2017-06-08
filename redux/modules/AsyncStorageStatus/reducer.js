const initialState = {
    settingItem: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SETTING_ASYNC_STORAGE_ITEM':
            return Object.assign({}, state, { settingItem: true })
        default: 
            return state;
    }
}