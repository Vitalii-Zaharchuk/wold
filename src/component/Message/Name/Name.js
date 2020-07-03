import React from 'react';
import s from './Name.module.css'
import { NavLink } from 'react-router-dom';
let Name = (props) =>{
    let NameItem = (props) =>{
        return(
        <NavLink to={'/name/' + props.id}>{props.name}</NavLink>
        )
    }
    
    let nameElement = props.nameData.map(n =><NameItem name={n.name} id={n.id}/>)
    return(
        <div className={s.name} >
                {nameElement}
        </div>
    )
}
export default Name;