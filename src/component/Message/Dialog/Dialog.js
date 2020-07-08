import React from 'react';
import s from './Dialog.module.css'
import { NavLink } from 'react-router-dom';
import { addDialogAC, updateNewDialogTextAC } from '../../../Redux/message-reducer';
let Dialog = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <NavLink to={'/dialog/' + props.id}>{props.dialog}</NavLink>
        )
    }
    
   
    let dialogsElements = props.dialogData.map(d =><DialogItem dialog={d.dialog} id={d.id}/>)
    let newDialogElement = React.createRef();
    let addDialog = () =>{
        
        props.dispatch(addDialogAC())
    }
    let onDialogChange = ()=>{
        let text = newDialogElement.current.value;
        let action = updateNewDialogTextAC(text)
        props.dispatch(action)
    }
    return(
       <div className={s.dialog}>
           {dialogsElements}
           <textarea  ref={newDialogElement} onChange={onDialogChange} value={props.newDialogText}></textarea>
           <button onClick={addDialog}>Send</button>
       </div>
        

        
    )
}
export default Dialog;