import React from 'react';


import { connect } from 'react-redux';
import { follow, unfollow, setUsers,  setTotalUserCount, setCurrentPage, togleIsFetching, followProgress,getUsersThunk,
    unfollowThunk,followThunk } from '../../Redux/user-reducer';
import * as axios from 'axios';
import User from './User';
import Prelolder from '../common/Prelolder/Prelolder';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UserContainer extends React.Component{
    
    componentDidMount(){
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
       
    }
    onPageChange = (pageNumber) =>{
        this.props.getUsersThunk(pageNumber,this.props.currentPage, this.props.pageSize)
        
    }
    
    render(){
        
        
        return(
           <> 
            {this.props.isFetching? <Prelolder/> : null}
            <User totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            
            onPageChange={this.onPageChange}
            followInProgress={this.props.followInProgress}
            followProgress={this.props.followProgress}
            followThunk={this.props.followThunk}
            unfollowThunk={this.props.unfollowThunk}
            
            
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
        isFetching:state.userPage.isFetching,
        followInProgress:state.userPage.followInProgress
        
    }
}

let authRedirectComponent = withAuthRedirect(UserContainer)
export  default  connect (mapStateToProps,{setUsers,setCurrentPage,
    togleIsFetching,setTotalUserCount,followProgress, getUsersThunk,unfollowThunk,followThunk
} )(authRedirectComponent);
