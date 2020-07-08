import React from 'react';
import s from './Message.module.css'
import Name from './Name/Name';
import Dialog from './Dialog/Dialog';
let Message =(props) =>{
    debugger
    return(
        <div className={s.message}>
            <Name nameData={props.messagePage.nameData}/>
            <Dialog dialogData={props.messagePage.dialogData} 
            dispatch={props.dispatch}
            newDialogText={props.messagePage.newDialogText}
           
            />
        </div>
    )
}
export default Message;