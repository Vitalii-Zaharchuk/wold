import React from 'react';
import s from './AboutMe.module.css'
import Prelolder from '../../common/Prelolder/Prelolder'
import ProfileStatus from './ProfileStatus';
let AboutMe = (props) =>{
    if (!props.profile){
        return <Prelolder/>
    }
  
    return (
        <div className={s.aboutMe}>
            
            <div className={s.ava}>
                    {props.profile.photos.large === null? <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkiyvPbpWyqRBwmDhxveBFLjtancIDOi3Dnw&usqp=CAU' />
                    :    <img src={props.profile.photos.large}/>
                }
                </div>
                <div className={s.me}>
                    
                    {props.profile.fullName === null ? <p>Igor Bezus</p> : props.profile.fullName}
                    
                    
                    <p>21</p>
                    <p>Kiev</p>
                    <ProfileStatus status='Hello my friend'/>
                </div>
                
            </div>
           
    )
}
export default AboutMe;
//<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkiyvPbpWyqRBwmDhxveBFLjtancIDOi3Dnw&usqp=CAU' />
//<img src={props.profile.photos.large}/>