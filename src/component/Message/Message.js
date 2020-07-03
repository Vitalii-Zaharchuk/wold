import React from 'react';
import s from './Message.module.css'
import Name from './Name/Name';
import Dialog from './Dialog/Dialog';
let Message =(props) =>{
    return(
        <div className={s.message}>
            <Name nameData={props.messagePage.nameData}/>
            <Dialog dialogData={props.messagePage.dialogData}/>
        </div>
    )
}
export default Message;