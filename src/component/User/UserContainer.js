import React from 'react';
import User from './User';

import { connect } from 'react-redux';
import { FOLLOWAC, UNFOLLOWAC, SETUSERSAC,  setTotalUserCount, setCurrentPageAC } from '../../Redux/user-reducer';
let mapStateToProps = (state) =>{
    return{
        users:state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage.totalUsersCount,
        currentPage:state.userPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow:(userId) =>{
            dispatch(FOLLOWAC(userId))
        },
        unfollow:(userId) =>{
            dispatch(UNFOLLOWAC(userId));
        },
        setUsers:(users) =>{
            dispatch(SETUSERSAC(users))
        },
        setCurrentPage:(pageNumber) =>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount:(totalCount)=>{
            dispatch(setTotalUserCount(totalCount))
        }
    }
}
 let UserContainer = connect (mapStateToProps, mapDispatchToProps)(User);
 export  default UserContainer