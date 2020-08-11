import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import * as axios from 'axios';
import { setUserData, authMeThunk, LogoutThunk } from '../../Redux/auth-reducer'
import { usersAPI } from '../../api/api'
class HeaderContainer extends React.Component{
   
    
    render(){
        return <Header {...this.props} logoutThunk={this.props.LogoutThunk}/>
    }
}
let mapStateToProps = (state) =>{
    return{
        isAuth: state.authPage.isAuth,
        login:state.authPage.login
    }
}

export default connect(mapStateToProps,{setUserData,authMeThunk,LogoutThunk })(HeaderContainer)

