import React from 'react';
import s from './User.module.css'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';
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
                    {u.follow? <button disabled={props.followInProgress.some(id=>id === u.id)} onClick={() =>{
                        props.unfollowThunk(u.id)
                        
                        //props.followProgress(true,u.id)
                       // usersAPI.unfollow(u.id)
                        //.then(response=>{
                      //      if(response.data.resultCode == 0){
                     //           props.unfollow(u.id);
                     //       }
                     //       props.followProgress(false,u.id)
                     //   })

                    }}>Unfollow</button> : <button disabled={props.followInProgress.some(id=>id === u.id)} onClick={()=>{
                        props.followThunk(u.id)
                        //props.followProgress(true,u.id)
                     //   usersAPI.follow(u.id)
                      //  .then(response=>{
                      //      if(response.data.resultCode == 0){
                      //          props.follow(u.id);
                       //     }
                        //    props.followProgress(false,u.id)
                       // })
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