import React from 'react';
import User from './User';

import { connect } from 'react-redux';
import { FOLLOWAC, UNFOLLOWAC } from '../../Redux/user-reducer';
let mapStateToProps = (state) =>{
    return{
        users:state.userPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow:(userId) =>{
            dispatch(FOLLOWAC(userId))
        },
        unfollow:(userId) =>{
            dispatch(UNFOLLOWAC(userId));
        }
    }
}
 let UserContainer = connect (mapStateToProps, mapDispatchToProps)(User);
 export  default UserContainer