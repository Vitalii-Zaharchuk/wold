import React from 'react';
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
let User = (props) =>{
    let pagesCount = Math.ceil(props.totalUsersCount / props. pageSize)
        let pages = [

        ]
        for (let i = 1;i<= pagesCount; i++){
            pages.push(i)
        }
        
    return(
        <div className={s.users}>
                <div>
                    {pages.map(p =>{
                        return <span className={props.currentPage === p && s.selectedPage} onClick={(e)=>{props.onPageChange(p);}}>{p}</span>
                    })}
                </div>
                
                {props.users.map(u =><div key={u.id}>
                    <div>
                        <NavLink to ={'/profile/' + u.id}>
                        <div className={s.photoUrl}>
                            {u.photos.small === null?  <img src='https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_business-512.png'/> 
                            : <img src={u.photos.small}/>
                            }
                            
                        
                        </div>
                        </NavLink>
                        
                    <div>
                    {u.follow? <button onClick={() =>{
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`
                        ,{withCredentials:true,   
                            headers:{
                            "API-KEY": "17342be6-466e-4833-9107-a0b5d7c39767"
                        }}).then(response=>{
                            if(response.data.resultCode == 0){
                                props.unfollow(u.id);
                            }
                        })

                    }}>Unfollow</button> : <button onClick={()=>{
                         axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                             withCredentials:true,
                             headers:{
                            "API-KEY": "17342be6-466e-4833-9107-a0b5d7c39767"
                        }}
                        ).then(response=>{
                            if(response.data.resultCode == 0){
                                props.follow(u.id);
                            }
                        })
                    }}>Follow</button>}
                    </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.post}
                            {u.status === null? <div>I am looking a job</div> : <div>{u.status}</div>}
                            </div>
                        </div>
                        <div>
                <div>{u.country}</div>
                <div>{u.city}</div>
                        </div>
                    </div>
    
    
                </div>)}
            </div>
    )
}
export default User;