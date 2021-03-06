import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    
} from './reducers/userReducers'

import {
    BusInsertReducer
} from './reducers/busReducer.js'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    BusIns: BusInsertReducer,

})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse
      (localStorage.getItem('userInfo')) : null

      const initalState = {
        userLogin: { userInfo: userInfoFromStorage }
  }

  const middleware = [thunk]

  const store = createStore(
    reducer,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store