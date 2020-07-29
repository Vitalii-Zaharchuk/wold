import React from 'react';


import { connect } from 'react-redux';
import { follow, unfollow, setUsers,  setTotalUserCount, setCurrentPage, togleIsFetching } from '../../Redux/user-reducer';
import * as axios from 'axios';
import User from './User';
import Prelolder from '../common/Prelolder/Prelolder';
class UserContainer extends React.Component{
    
    componentDidMount(){
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} & count=${this.props.pageSize}`
        ,{withCredentials:true}).then(response=>{
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
                this.props.togleIsFetching(false)
            })
    }
    onPageChange = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber)
        this.props.togleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} & count=${this.props.pageSize}`,{withCredentials:true}).then(response=>{
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)

            this.props.togleIsFetching(false)
        })
    }
    
    render(){
        
        
        return(
           <> 
            {this.props.isFetching? <Prelolder/> : null}
            <User totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChange={this.onPageChange}
            
            
            />
            </>
        )

    }
}



let mapStateToProps = (state) =>{
    return{
        users:state.userPage.users,
        pageSize:state.userPage.pageSize,
        totalUsersCount:state.userPage.totalUsersCount,
        currentPage:state.userPage.currentPage,
        isFetching:state.userPage.isFetching
    }
}

export  default  connect (mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,
    togleIsFetching,setTotalUserCount
} )(UserContainer);
