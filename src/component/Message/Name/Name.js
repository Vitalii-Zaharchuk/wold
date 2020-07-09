import React from 'react';
import s from './Name.module.css'
import { NavLink } from 'react-router-dom';
let Name = (props) =>{
    let state = props.store.getState()
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
export default Name;