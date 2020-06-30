import React from 'react';
import s from './AboutMe.module.css'
let AboutMe = () =>{
    return(
        <div className={s.aboutMe}>
        <div className={s.ava}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkiyvPbpWyqRBwmDhxveBFLjtancIDOi3Dnw&usqp=CAU'/>
        </div>
        <div className={s.me}>
            <p>Igor Bezus</p>
            <p>21</p>
            <p>Kiev</p>
        </div>

    </div>
    )
}
export default AboutMe;