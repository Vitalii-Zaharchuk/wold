import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../Redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return{
        profilePage:state.profilePage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostTextAC:(text) =>{
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost:() =>{
            dispatch(addPostAC());
        }
    }
}
let MyPostContainer = connect(mapStateToProps, mapDispatchToProps )(MyPost);
export default MyPostContainer;