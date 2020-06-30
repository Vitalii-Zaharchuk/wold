import React from 'react';
import s from './Message.module.css'
import Name from './Name/Name';
import Dialog from './Dialog/Dialog';
let Message =() =>{
    return(
        <div className={s.message}>
            <Name/>
            <Dialog/>
        </div>
    )
}
export default Message;