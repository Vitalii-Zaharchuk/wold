import React from 'react';
const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT'
let initialState = {
    nameData: [

        { id: 1, name: 'Misha' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Igor' },
        { id: 4, name: 'oleg' }

    ],
    dialogData: [
        { id: 1, dialog: 'Hi' },
        { id: 2, dialog: 'Fine' },
        { id: 3, dialog: 'Bad' },
        { id: 4, dialog: 'Good' }
    ],
    newDialogText: 'Greate'
}
let messageReducer = (state = initialState,action) =>{
    
    switch(action.type){
        case ADD_DIALOG:
        let newDialog = {
            id: 5,
            dialog: state.newDialogText
        }
        return {...state,
        dialogData:[...state.dialogData,newDialog]
        }
       
       case  UPDATE_NEW_DIALOG_TEXT:
           return {...state,
        newDialogText:action.newText
        }
        
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