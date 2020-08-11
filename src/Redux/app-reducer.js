import React from 'react'
import { authMeThunk } from './auth-reducer'
const SET_INITIALED = 'SET-INITIALED'
let initialState = {
    initialized: false
}
let appReducer = (state = initialState,action) =>{
    switch(action.type){
        case SET_INITIALED:{
            return{
                ...state,
                initialized:true
            }
        }    
        default:
             return state
    }
}
export const setInitialed  = () =>{
    return{
        type: 'SET-INITIALED'
    }
}
export const initializedAPPThunk = ()=>{
    return (dispatch) =>{
       let promise = dispatch(authMeThunk())
       Promise.all([promise])
       .then(()=>{
           dispatch(setInitialed())
       })
    }
}
export default appReducer; 
