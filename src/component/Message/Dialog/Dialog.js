import React from 'react';
import s from './Dialog.module.css'
import { NavLink, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

let Dialog = (props) =>{
    
    let DialogItem = (props) =>{
        return(
        <NavLink to={'/dialog/' + props.id}>{props.dialog}</NavLink>
        )
    }
    
   
    let dialogsElements = props.messagePage.dialogData.map(d =><DialogItem dialog={d.dialog} id={d.id}/>)
    let newDialogElement = React.createRef();
    let addDialogReduxForm = (value) =>{
         props.addDialog(value.addNewDialog)
    }
    let onDialogChange = ()=>{
        let text = newDialogElement.current.value;
        props.updateNewDialogTextAC(text)
        
    }
    
    return(
       <div className={s.dialog}>
           {dialogsElements}
           <AddMesageReduxForm onSubmit={addDialogReduxForm}/>
       </div>
        

        
    )
}
let AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <Field name={'addNewDialog'} component={'textarea'}/>
            
             <button >Send</button>
        </form>
    )
}
const AddMesageReduxForm = reduxForm({form:'addMessageForm'})(AddMessageForm)
export default Dialog;