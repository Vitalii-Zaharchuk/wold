import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
let Header = (props) =>{
    return(
        <div className ={s.header}>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrPotIEiUTbNLUNoJE5gAdjdirbVcFSvLFvg&usqp=CAU'/> </div>
            <div className={s.loginBlock}>
                {props.isAuth?props.login :<NavLink to={'/login'}>Login</NavLink> }
                
            </div>

        </div>
    )
}
export default Header;