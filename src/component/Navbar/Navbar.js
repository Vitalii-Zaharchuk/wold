import React from 'react';
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
let Navbar = () =>{
    return(
        <div className={s.navbar}>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/message'>Message</NavLink>
                <NavLink to = '/user'>User</NavLink>
        </div>
    )
}
export default Navbar;