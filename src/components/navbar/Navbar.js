import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <NavLink to='/UkraineNews' className={s.navlink} activeClassName={s.active_navlink}>Новини України</NavLink>
            <NavLink to='/WorldNews' className={s.navlink} activeClassName={s.active_navlink}>Новини світу</NavLink>
        </nav>
    )
}
export default Navbar