import React from 'react';
import { getUsers, usersAPI } from '../api/api';
const FOLLOW_AC = 'FOLLOWAC';
const UNFOLLOW_AC = 'UNFOLLOWAC'
const SETUSERS_AC = 'SETUSERSAC' 
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGLE_IS_FETHING = 'TOGLE_IS_FETHING'
const FOLLOW_PROGRESS = 'FOLLOW_PROGRESS'

let initialState  = {
    users:[
        
    ],
    pageSize:2,
    totalUsersCount:4,
    currentPage: 1,
    isFetching: true,
    followInProgress : []
   
}
let userReducer = (state= initialState,action)=>{
    
        switch(action.type){
            case FOLLOW_AC:
            return{
                ...state,
                users:state.users.map( u =>{
                    if(u.id === action.userId){
                        return{...u,follow:true}
                        
                    }
                    return u;
                  
                })
                
            }
            
        case UNFOLLOW_AC:
            return{...state,
                users:state.users.map(u =>{
                    if (u.id === action.userId){
                        return{...u,follow:false}
                    }
                    return u;
                })
            }
         case SETUSERS_AC:
             return{
                 ...state,
                 users:action.users
             }
        case SET_CURRENT_PAGE:{
                return{...state,currentPage:action.currentPage}
            }
            case  SET_TOTAL_USER_COUNT:
                return {
                    ...state,
                    totalUserCount:action.totalUsersCount
                }  
        case TOGLE_IS_FETHING:
            return{
                ...state,
                isFetching:action.isFetching
            } 
        case FOLLOW_PROGRESS:{
            return{
                ...state,
                followInProgress:action.isFetching
                ?   [...state.followInProgress, action.userId]
                :   state.followInProgress.filter(id => id != action.userId)
            }
        }   
        default:
            return state  
        }
    
}
export let followSucces = (userId) =>{
    return{
        type: 'FOLLOWAC',userId
    }
}
export let unfollowSucces = (userId) =>{
    return{
        type: 'UNFOLLOWAC',userId
    }
}
export let setUsers = (users) =>{
    return{
        type:'SETUSERSAC', users
    }
}
export let setCurrentPage = (currentPage) =>({type:'SET_CURRENT_PAGE',currentPage})
export let setTotalUserCount = (totalUserCount) =>{
    return{
        type:'SET_TOTAL_USER_COUNT', totalUserCount
    }
}
export let togleIsFetching = (isFetching) =>{
    return{
        type:'TOGLE_IS_FETHING', isFetching
    }
}
export let followProgress = (isFetching,userId) =>({ type:FOLLOW_PROGRESS,isFetching,userId})
export const getUsersThunk = (currentPage, pageSize) =>{
    return (dispatch) =>{
        dispatch(togleIsFetching(true))
        usersAPI.getUsers(currentPage,pageSize).then(data=>{
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
                dispatch(togleIsFetching(false))
            })
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(followProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSucces(userId));
                }
                dispatch(followProgress(false, userId))
            })
    }
}
export const followThunk =(userId) =>{
    return (dispatch) =>{
        dispatch(followProgress(true,userId))
        usersAPI.follow(userId)
        .then(response=>{
            if(response.data.resultCode == 0){
                dispatch(followSucces(userId));
            }
            dispatch(followProgress(false,userId))
        })
    }
}
export default userReducer