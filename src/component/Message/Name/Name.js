import React from 'react';
import s from './Name.module.css'
import { NavLink } from 'react-router-dom';
import StoreContext from '../../../StoreContext';
import store from '../../../Redux/redux-store';
let Name = (props) =>{
    return(
        <StoreContext.Consumer>{
            (store) =>{
                let state = store.getState()
                let NameItem = (props) =>{
                    return(
                    <NavLink to={'/name/' + props.id}>{props.name}</NavLink>
                    )
                }
                
                let nameElement = state.messagePage.nameData.map(n =><NameItem name={n.name} id={n.id}/>)
                return(
                    <div className={s.name} >
                            {nameElement}
                    </div>
                ) 
            }
            }

        </StoreContext.Consumer>
    )
    
}
export default Name;