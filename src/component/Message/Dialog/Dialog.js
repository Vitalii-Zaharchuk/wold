import React from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';
let Dialog = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <NavLink to={'/dialog/' + props.id}>{props.dialog}</NavLink>
        )
    }
    
   
    let dialogsElements = props.dialogData.map(d =><DialogItem dialog={d.dialog} id={d.id}/>)

    
    return(
       <div className={s.dialog}>
           {dialogsElements}
       </div>
        

        
    )
}
export default Dialog;