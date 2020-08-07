import React from 'react';

import { addDialogAC } from '../../../Redux/message-reducer';
import Dialog from './Dialog';

import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
class DialogContainer extends React.Component{
    render(){
        return(
        <Dialog {...this.props}/>
        )
    }
}
let mapStateToProps = (state) =>{
    return{
        messagePage: state.messagePage,
        isAuth:state.authPage.isAuth
        
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
       
        addDialog:(addNewDialog) =>{
            dispatch(addDialogAC(addNewDialog))
        }

    }
}   
export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)
(DialogContainer)

