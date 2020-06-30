import React from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';
let Dialog = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <NavLink to={'/dialog/' + props.id}>{props.dialog}</NavLink>
        )
    }
    
    let dialogData=[
        {id: 1,dialog: 'Hi'},
        {id: 2,dialog: 'Fine'},
        {id: 3,dialog: 'Bad'},
        {id: 4,dialog: 'Good'}
    ]
    let dialogsElements = dialogData.map(d =><DialogItem dialog={d.dialog} id={d.id}/>)

    
    return(
       <div className={s.dialog}>
           {dialogsElements}
       </div>
        

        
    )
}
export default Dialog;