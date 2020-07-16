import React from 'react';
import s from './User.module.css'
let User = (props) =>{
    return(
        <div>
            {props.users.map(u =><div key={u.id}>
                <div>
                    <div className={s.photoUrl}><img src={u.photo}/></div>
                <div>
                {u.follow? <button onClick={() =>{props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.post}</div>
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