import React from 'react';
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe';
import * as axios from 'axios';
import MyPostContainer from './MyPost/MypostContainer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUsersProfile, getUserProfileThunk, getStatusThunk, updateStatusThunk } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 1049
        }
        this.props.getUserProfileThunk(userId)
       this.props.getStatusThunk(userId)
    }
    render(){
        return(
            <Profile {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatusThunk={this.props.updateStatusThunk}
            />
            
        )
    }
}




 
let mapStateToProps = (state) =>{
    return{
        profile:state.profilePage.profile,
        status:state.profilePage.status
        
    }

} 
export default compose(
    connect (mapStateToProps,{setUsersProfile,getUserProfileThunk, getStatusThunk, updateStatusThunk}),
    withRouter,
    
    withAuthRedirect
)(ProfileContainer)
