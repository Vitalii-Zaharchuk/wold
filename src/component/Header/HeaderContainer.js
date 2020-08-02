import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import * as axios from 'axios';
import { setUserData, authMeThunk } from '../../Redux/auth-reducer'
import { usersAPI } from '../../api/api'
class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authMeThunk()
       // usersAPI.authMe().then(response => {
         //  if (response.data.resultCode === 0) {
           //  let { id, login, email } = response.data.data
             //  this.props.setUserData(id, login, email)
           //}
       // })

    }
    render(){
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) =>{
    return{
        isAuth: state.authPage.isAuth,
        login:state.authPage.login
    }
}

export default connect(mapStateToProps,{setUserData,authMeThunk })(HeaderContainer)

