import React from 'react';
const FOLLOW_AC = 'FOLLOWAC';
const UNFOLLOW_AC = 'UNFOLLOWAC'
const SETUSERS_AC = 'SETUSERSAC' 
let initialState  = {
    users:[
        
    ]
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
export default userReducer