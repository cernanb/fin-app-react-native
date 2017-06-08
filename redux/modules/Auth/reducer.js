export default (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return action.currentUser
        default: 
            return state;
    }
}