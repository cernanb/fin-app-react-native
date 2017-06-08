import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'
import asyncStrorageStatus from '../modules/AsyncStorageStatus/reducer';
import auth from '../modules/Auth/reducer';

import navReducer from '../modules/Navigator/reducer'

const reducers = combineReducers({
  asyncStrorageStatus,
  auth,
  form,
  nav: navReducer
})

const middleware = [thunk]
export default createStore(
  reducers, 
  applyMiddleware(...middleware)
)