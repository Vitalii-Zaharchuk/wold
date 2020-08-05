import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import userReducer from './user-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducere = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer,
    userPage : userReducer,
    authPage : authReducer,
    form: formReducer
    
})
let store = createStore(reducere,applyMiddleware(thunkMiddleware));
export default store