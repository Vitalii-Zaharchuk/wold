import React from 'react';

import { addDialogAC, updateNewDialogTextAC } from '../../../Redux/message-reducer';
import Dialog from './Dialog';

import { connect } from 'react-redux';
let mapStateToProps = (state) =>{
    return{
        messagePage: state.messagePage
        
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewDialogTextAC: (text) =>{
            let action = updateNewDialogTextAC(text)
           dispatch(action)
        },
        addDialog:() =>{
            dispatch(addDialogAC())
        }

    }
}   
let DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;