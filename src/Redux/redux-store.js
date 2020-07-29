import React from 'react';
import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import userReducer from './user-reducer';
import authReducer from './auth-reducer';

let reducere = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer,
    userPage : userReducer,
    authPage : authReducer
})
let store = createStore(reducere);
export default store