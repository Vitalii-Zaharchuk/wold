import React from 'react';
import s from './User.module.css'
import * as axios from 'axios';
class User extends React.Component{
    
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} & count=${this.props.pageSize}`).then(response=>{
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }
    onPageChange = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }
    
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props. pageSize)
        let pages = [

        ]
        for (let i = 1;i<= pagesCount; i++){
            pages.push(i)
        }
        
        return(
            
            <div className={s.users}>
                <div>
                    {pages.map(p =>{
                        return <span className={this.props.currentPage === p && s.selectedPage} onClick={(e)=>{this.onPageChange(p);}}>{p}</span>
                    })}
                </div>
                
                {this.props.users.map(u =><div key={u.id}>
                    <div>
                        
                        <div className={s.photoUrl}>
                            {u.photos.small === null?  <img src='https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_business-512.png'/> 
                            : <img src={u.photos.small}/>
                            }
                            
                        
                        </div>
                    <div>
                    {u.follow? <button onClick={() =>{this.props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
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
}


export default User;