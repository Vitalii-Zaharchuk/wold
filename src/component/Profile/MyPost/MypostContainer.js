import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';
import MyPost from './MyPost';
let MyPostContainer = (props) =>{
    let state = props.store.getState()
   
    
    let addPost = () =>{
        
        props.store.dispatch(addPostAC())
    }
    let onPostChange = (text) =>{
        
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }
    return(
        <MyPost updateNewPostTextAC={onPostChange} addPost={addPost}

        postData={state.profilePage.postData} 
        dispatch={props.store.dispatch} 
        post={props.post}
        newPostText = {state.profilePage.newPostText}
         />
    )
} 
export default MyPostContainer;