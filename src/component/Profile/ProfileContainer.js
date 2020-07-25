import React from 'react';
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe';
import * as axios from 'axios';
import MyPostContainer from './MyPost/MypostContainer';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUsersProfile } from '../../Redux/profile-reducer';

class ProfileContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response=>{
                this.props.setUsersProfile(response.data)
            })
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
export default connect (mapStateToProps,{setUsersProfile})(ProfileContainer)