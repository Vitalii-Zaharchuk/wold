import React from 'react';
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe';
import * as axios from 'axios';
import MyPostContainer from './MyPost/MypostContainer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUsersProfile, getUserProfileThunk } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2
        }
        this.props.getUserProfileThunk(userId)
        //usersAPI.userProfile(userId).then(response=>{
           //   this.props.setUsersProfile(response.data)
           // })
    }
    render(){
        return(
            <Profile {...this.props}
            profile={this.props.profile}
            />
            
        )
    }
}




 
let mapStateToProps = (state) =>{
    return{
        profile:state.profilePage.profile,
        
    }

} 
export default compose(
    connect (mapStateToProps,{setUsersProfile,getUserProfileThunk}),
    withRouter,
    
    withAuthRedirect
)(ProfileContainer)
