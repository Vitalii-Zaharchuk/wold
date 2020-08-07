import React from 'react';
import { addPostAC } from '../../../Redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return{
        profilePage:state.profilePage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        
        addPost:(addNewPost) =>{
            dispatch(addPostAC(addNewPost));
        }
    }
}
let MyPostContainer = connect(mapStateToProps, mapDispatchToProps )(MyPost);
export default MyPostContainer;