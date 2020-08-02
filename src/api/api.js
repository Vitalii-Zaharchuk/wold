import Axios from "axios"

import * as axios from 'axios';
const instunse = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers:{
    "API-KEY": "17342be6-466e-4833-9107-a0b5d7c39767"}
})
export const usersAPI = {
    getUsers(currentPage,pageSize){
        return  instunse.get(`users?page=${currentPage} & count=${pageSize}`)
        .then(response=>{
            return response.data;
        })
    },
    unfollow (userId){
        return instunse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    follow (userId) {
        return instunse.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    userProfile (userId){
        return instunse.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId)
    }
    
}
export const auth ={
    me(){
        return instunse.get(`https://social-network.samuraijs.com/api/1.0/auth/me`) 
    }
}