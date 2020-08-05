import React from 'react'
import s from './Login.module.css'
import { reduxForm, Field } from 'redux-form'

let LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field placeholder={'password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)
let Login = (props) =>{
    const onSubmit = (formData) =>{
        console.log(formData)
    }
    return(
        <div className={s.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login;