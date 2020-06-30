import React from 'react';
import s from './Name.module.css'
import { NavLink } from 'react-router-dom';
let Name = (props) =>{
    let NameItem = (props) =>{
        return(
        <NavLink to={'/name/' + props.id}>{props.name}</NavLink>
        )
    }
    let nameData =[
        {id: 1,name: 'Misha'},
        {id: 2,name: 'Sasha'},
        {id: 3,name: 'Igor'},
        {id: 4,name: 'oleg'}
    ]
    let nameElement = nameData.map(n =><NameItem name={n.name} id={n.id}/>)
    return(
        <div className={s.name} >
                {nameElement}
        </div>
    )
}
export default Name;