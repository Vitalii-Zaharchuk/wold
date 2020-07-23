import React from 'react';
const FOLLOW_AC = 'FOLLOWAC';
const UNFOLLOW_AC = 'UNFOLLOWAC'
const SETUSERS_AC = 'SETUSERSAC' 
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
let initialState  = {
    users:[
        
    ],
    pageSize:5,
    totalUsersCount:30,
    currentPage: 1
   
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
        default:
            return state  
        }
    
}
export let FOLLOWAC = (userId) =>{
    return{
        type: 'FOLLOWAC',userId
    }
}
export let UNFOLLOWAC = (userId) =>{
    return{
        type: 'UNFOLLOWAC',userId
    }
}
export let SETUSERSAC = (users) =>{
    return{
        type:'SETUSERSAC', users
    }
}
export let setCurrentPageAC = (currentPage) =>({type:'SET_CURRENT_PAGE',currentPage})
export let setTotalUserCount = (totalUserCount) =>{
    return{
        type:'SET_TOTAL_USER_COUNT', totalUserCount
    }
}
export default userReducer