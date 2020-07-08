import React from 'react';
import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';

let reducere = combineReducers({
    profilePage : profileReducer,
    messagePage : messageReducer
})
let store = createStore(reducere);
export default store