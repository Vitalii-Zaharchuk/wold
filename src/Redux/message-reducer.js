import React from 'react';
const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT'
let messageReducer = (state,action) =>{
    
    switch(action.type){
        case ADD_DIALOG:
        let newDialog = {
            id: 5,
            dialog: state.newDialogText
        }
       state.dialogData.push(newDialog)
       return state
       case  UPDATE_NEW_DIALOG_TEXT:
        state.newDialogText = action.newText;
        return state
        default:
            return state
    }
}
export let addDialogAC = () =>{
    return{
        type:'ADD-DIALOG'
    }
}
export let updateNewDialogTextAC = (text) =>{
    return{
        type:'UPDATE-NEW-DIALOG-TEXT',
        newText:text
    }
}
export default messageReducer