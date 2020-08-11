import React from 'react';
import { auth } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_USER_DATA  = 'SET_USER_DATA'
let initialState = {
    id: null,
    login: null,
    email: null,
    
    isAuth: false
} 
let authReducer  = (state= initialState, action)=>{
    switch(action.type){
        case SET_USER_DATA:
            return{
                ...state,
                ...action.payload,
                
            }
            default:
                return state
        
        
    }
}
export let setUserData = (id,login,email, isAuth)=>{
    return{
        type:'SET_USER_DATA', payload:{id,login,email,isAuth}
    }
}

export const authMeThunk = () =>{
  return (dispatch) =>{
   return auth.me().then(response => {
      if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data
                dispatch(setUserData(id, login, email,true))
  }
        })
    }
}
export const LoginThunk = (email,password,rememberMe) =>{
    return (dispatch) =>{
        auth.login(email,password,rememberMe)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(authMeThunk())
            }else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login',{_error:message}))
            }
           
        })
    }
}
export const LogoutThunk  = () =>{
    return (dispatch) =>{
        auth.logout()
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setUserData(null, null, null,false))
            }
        })
    }
}
export default authReducer;  