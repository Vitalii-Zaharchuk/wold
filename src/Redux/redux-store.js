import React from 'react';
import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import userReducer from './user-reducer';

let reducere = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer,
    userPage : userReducer
})
let store = createStore(reducere);
export default store