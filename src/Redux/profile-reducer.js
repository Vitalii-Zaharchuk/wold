import React from 'react';
import { usersAPI, profileAPI } from '../api/api';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_STATUS = 'SET_STATUS'
const ADD_POST = 'ADD-POST'

let initialState = {
    postData: [
        { id: 1, post: 'I am bad' },
        { id: 2, post: 'I will be to Ukrain' }
    ],
    
    profile:null,
    status: ''
}
let profileReducer = (state = initialState, action) =>{
    switch(action.type){
    case ADD_POST:
        let newPost={
            id:3,
            post: action.addNewPost
        }
        return {...state,
        postData:[...state.postData,newPost],
        addNewPost:action.addNewPost
        }
        
    
    case SET_USERS_PROFILE:
        return{...state,
        profile:action.profile
        }
    case SET_STATUS:{
        return{
            ...state,
            status:action.status
        }
    }          
    default:
            return state
    }

  
    
   
    
}
export let addPostAC =(addNewPost) =>{
    return{
        type:'ADD-POST',addNewPost
    }
}

export let setUsersProfile = (profile) =>{
    return{
        type:'SET_USERS_PROFILE',profile
    }
}
export let setStatus = (status) =>{
    return{
        type:'SET_STATUS',status
    }
}
export const getUserProfileThunk = (userId) =>{
    return (dispatch) => {
        usersAPI.userProfile(userId).then(response=>{
            dispatch(setUsersProfile(response.data))
          })
    }
}
export const getStatusThunk = (userId) =>  (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    
}

export const updateStatusThunk = (status) => (dispatch) =>{
        profileAPI.updateStatus(status)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    
}
export default profileReducer;