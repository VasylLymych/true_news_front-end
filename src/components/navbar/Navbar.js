import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css'
import NotificationContainer from "../notification/Notification.container";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <NavLink to='/UkraineNews' className={s.navlink} activeClassName={s.active_navlink}>Новини України</NavLink>
            <NavLink to='/WorldNews' className={s.navlink} activeClassName={s.active_navlink}>Новини світу</NavLink>
            <NavLink to='/addNewsItem' className={s.navlink} activeClassName={s.active_navlink}>Додати новину</NavLink>
            <NotificationContainer/>
        </nav>
    )
}
export default Navbar