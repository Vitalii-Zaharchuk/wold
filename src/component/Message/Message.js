import React from 'react';
import s from './Message.module.css'
import Name from './Name/Name';

import DialogContainer from './Dialog/DialogContainer';
let Message =(props) =>{
    debugger
    return(
        <div className={s.message}>
            <Name store={props.store}/>
            <DialogContainer store={props.store}
           
            />
        </div>
    )
}
export default Message;