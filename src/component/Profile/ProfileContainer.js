import React from 'react';
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe';
import * as axios from 'axios';
import MyPostContainer from './MyPost/MypostContainer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        debugger
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2
        }
       // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ ` + userId).then(response=>{
       //         this.props.setUsersProfile(response.data)
       //     })
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
        profile:state.profilePage.profile
    }

} 
let withUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect (mapStateToProps,{setUsersProfile})(withUrlDataContainerComponent)