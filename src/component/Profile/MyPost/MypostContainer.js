import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';
import MyPost from './MyPost';
import StoreContext from '../../../StoreContext';
import store from '../../../Redux/redux-store';
let MyPostContainer = (props) =>{
    return(
    <StoreContext.Consumer>{
        (store) => {
            let state = store.getState()


            let addPost = () => {

                store.dispatch(addPostAC())
            }
            let onPostChange = (text) => {

                let action = updateNewPostTextAC(text)
                store.dispatch(action)
            }
            return <MyPost updateNewPostTextAC={onPostChange} addPost={addPost}

            postData={state.profilePage.postData} 
             
            post={props.post}
            newPostText = {state.profilePage.newPostText}/>
        }

    }



    </StoreContext.Consumer>
    )
} 
export default MyPostContainer;