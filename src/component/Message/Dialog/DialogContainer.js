import React from 'react';

import { addDialogAC, updateNewDialogTextAC } from '../../../Redux/message-reducer';
import Dialog from './Dialog';
import StoreContext from '../../../StoreContext';
import store from '../../../Redux/redux-store';
let DialogContainer = (props) => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                let addDialog = () => {

                    store.dispatch(addDialogAC())
                }
                let onDialogChange = (text) => {

                    let action = updateNewDialogTextAC(text)
                    store.dispatch(action)
                }
                return <Dialog updateNewDialogTextAC={onDialogChange}
                        dialogData={state.messagePage.dialogData}
                        addDialog={addDialog}
                       
                        newDialogText={state.messagePage.newDialogText}
                    />
                
            }
        }


        </StoreContext.Consumer>
    )

}   
export default DialogContainer;