import React, {createRef, useEffect} from "react";
import {NavLink} from "react-router-dom";
import s from "./Article.module.css"
import logo from "./../../logo.jpg"

const Article = props => {

    return (
        <div className={s.articleWrapper}>
            <h2 className={s.articleWrapper}>{<NavLink className={s.articleNav}
                                                       to={`/${props.id}`}>{props.title}</NavLink>}</h2>
            {props.currentN ? <img src={logo} alt="articleImg"/> :
                <img src={logo} alt="articleImg"/>}
        </div>
    )
}
export default Article