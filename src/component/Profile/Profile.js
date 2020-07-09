import React from 'react';
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe';

import MyPostContainer from './MyPost/MypostContainer';
let Profile = (props) =>{
    
    return(
        <div className={s.profile}>
            <div className={s.obloshka}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKQhkHjfqrh3OJIImrmatlury9wtW3ko0AVQ&usqp=CAU'/>

            </div>
           <AboutMe/>
           <MyPostContainer store={props.store}
           />
        </div>
    )
}
export default Profile;