import React from 'react';
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe';

import MyPostContainer from './MyPost/MypostContainer';
import { Redirect } from 'react-router-dom';
let Profile = (props) =>{
    //if(!props.isAuth) return <Redirect to='/login'/>
    return(
        <div className={s.profile}>
            <div className={s.obloshka}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKQhkHjfqrh3OJIImrmatlury9wtW3ko0AVQ&usqp=CAU' />
               

            </div>
    
           <AboutMe profile={props.profile} status={props.status}  updateStatusThunk={props.updateStatusThunk}/>
           <MyPostContainer store={props.store}/>
        </div>
    )
}
export default Profile;