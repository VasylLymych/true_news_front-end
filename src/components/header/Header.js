import React from "react";
import logo from './../../logo.jpg'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrapper}>
                <img src={logo} className={styles.logo_img} alt="logo"/>
                <h1>Новини України та світу</h1>
            </div>
        </header>
    )
}
export default Header