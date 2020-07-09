import React from 'react';

import { addDialogAC, updateNewDialogTextAC } from '../../../Redux/message-reducer';
import Dialog from './Dialog';
let DialogContainer = (props) =>{
    let state = props.store.getState()
    let addDialog = () =>{
        
        props.store.dispatch(addDialogAC())
    }
    let onDialogChange = (text)=>{
        
        let action = updateNewDialogTextAC(text)
        props.store.dispatch(action)
    }
    return(
        
       <Dialog updateNewDialogTextAC={onDialogChange}
       dialogData={state.messagePage.dialogData}
       addDialog={addDialog}
       dispatch={props.store.dispatch}
       newDialogText={state.messagePage.newDialogText}
       />
        

        
    )
}
export default DialogContainer;