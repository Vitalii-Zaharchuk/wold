import React from 'react'
import s from './Login.module.css'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControls/FormsControls'
import { required } from '../../utils/validators/validators'
import { connect } from 'react-redux'
import { LoginThunk } from '../../Redux/auth-reducer'
import { Redirect } from 'react-router-dom'

let LoginForm = (props) =>{
    //const maxLendth5 = maxLengthCreator(5)
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} component={Input} name={'email'} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} component={Input} name={'password'} validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={Input} name={'checkbox'} /> remember me
            </div>
            
            {props.error && <div>{props.error}</div>}
            
            
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
let Login = (props) =>{
    const onSubmit = (formData) =>{
        props.LoginThunk(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return(
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
let mapStateToProps = (state) =>{
    return{
        isAuth:state.authPage.isAuth
    }
}
export default connect (mapStateToProps , {LoginThunk}) (Login);