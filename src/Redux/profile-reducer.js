import React from 'react';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let profileReducer = (state, action) =>{
    switch(action.type){
    case ADD_POST:
        let newPost={
            id:3,
            post: state.newPostText
        }
        state.postData.push(newPost);
        return state
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state
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
export default profileReducer;