import React from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

let Dialog = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <NavLink to={'/dialog/' + props.id}>{props.dialog}</NavLink>
        )
    }
    
   
    let dialogsElements = props.messagePage.dialogData.map(d =><DialogItem dialog={d.dialog} id={d.id}/>)
    let newDialogElement = React.createRef();
    let addDialog = () =>{
        
        props.addDialog()
    }
    let onDialogChange = ()=>{
        let text = newDialogElement.current.value;
        props.updateNewDialogTextAC(text)
        
    }
    return(
       <div className={s.dialog}>
           {dialogsElements}
           <textarea  ref={newDialogElement} onChange={onDialogChange} value={props.messagePage.newDialogText}></textarea>
           <button onClick={addDialog}>Send</button>
       </div>
        

        
    )
}
export default Dialog;