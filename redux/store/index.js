import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'

import navReducer from '../modules/Navigator/reducer'

const reducers = combineReducers({
  form,
  nav: navReducer
})

const middleware = [thunk]
export default createStore(
  reducers, 
  applyMiddleware(...middleware)
)