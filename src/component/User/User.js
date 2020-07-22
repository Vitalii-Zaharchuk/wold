import React from 'react';
import s from './User.module.css'
import * as axios from 'axios';
class User extends React.Component{
    constructor(props){
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                this.props.setUsers(response.data.items)
            })
            
    }
    
    render(){
        return(
        
            <div>
                
                {this.props.users.map(u =><div key={u.id}>
                    <div>
                        <div className={s.photoUrl}><img src={u.photo}/></div>
                    <div>
                    {u.follow? <button onClick={() =>{this.props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
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
}


export default User;