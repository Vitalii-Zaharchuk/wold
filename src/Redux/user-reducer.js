import React from 'react';
const FOLLOW_AC = 'FOLLOWAC';
const UNFOLLOW_AC = 'UNFOLLOWAC'
let initialState  = {
    users:[
        {id:1, name:'Dima',post:'I am loking joob',country:'Belarus',city:'Minsk',follow:true,
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb4InSVP1QgDD-j5tbcLSIIVDAiu1iamJtZQ&usqp=CAU'    },
        {id:2, name:'Sasha',post:'I am loking joob',country:'Ukraine',city:'Kiev',follow:true,
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb4InSVP1QgDD-j5tbcLSIIVDAiu1iamJtZQ&usqp=CAU'     },
        {id:3, name:'Igor',post:'I am loking joob',country:'Russia',city:'Moskow',follow:false,
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb4InSVP1QgDD-j5tbcLSIIVDAiu1iamJtZQ&usqp=CAU'     }
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
export default userReducer