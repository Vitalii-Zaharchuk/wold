import React from 'react';
import { usersAPI } from '../api/api';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let initialState = {
    postData: [
        { id: 1, post: 'I am bad' },
        { id: 2, post: 'I will be to Ukrain' }
    ],
    newPostText: 'fd',
    profile:null
}
let profileReducer = (state = initialState, action) =>{
    switch(action.type){
    case ADD_POST:
        let newPost={
            id:3,
            post: state.newPostText
        }
        return {...state,
        postData:[...state.postData,newPost]
        }
        
    case UPDATE_NEW_POST_TEXT:
        return {...state,
        newPostText:action.newText
        }
    case SET_USERS_PROFILE:
        return{...state,
        profile:action.profile
        }   
    default:
            return state
    }

  
    
   
    
}
export let addPostAC =() =>{
    return{
        type:'ADD-POST'
    }
}
export let updateNewPostTextAC = (text) =>{
    return{
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    }
}
export let setUsersProfile = (profile) =>{
    return{
        type:'SET_USERS_PROFILE',profile
    }
}
export const getUserProfileThunk = (userId) =>{
    return (dispatch) => {
        usersAPI.userProfile(userId).then(response=>{
            dispatch(setUsersProfile(response.data))
          })
    }
}
export default profileReducer;