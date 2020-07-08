import React from 'react';
import s from './Profile.module.css'
import AboutMe from './AboutMe/AboutMe';
import MyPost from './MyPost/MyPost';
let Profile = (props) =>{
    
    return(
        <div className={s.profile}>
            <div className={s.obloshka}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQKQhkHjfqrh3OJIImrmatlury9wtW3ko0AVQ&usqp=CAU'/>

            </div>
           <AboutMe/>
           <MyPost postData={props.profilePage.postData} dispatch={props.dispatch} 
           newPostText={props.profilePage.newPostText}
          
           />
        </div>
    )
}
export default Profile;