import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import s from "./NewsItem.module.css"
import logo from "./../../logo.jpg"

const NewsItem = props => {
    const currentItemRef = useRef();
    useEffect(() => props.currentN ? currentItemRef.current.scrollIntoView({block:"start"}) : null, [])
    return (
        <div className={s.newsItemWrapper} ref={props.currentN ? currentItemRef : null}>
            <h2 className={s.newsItemWrapper}>{<NavLink className={s.newsItemNav}
                                                        to={`/${props.id}`}>{props.title}</NavLink>}</h2>
            {props.currentN ? <img src={logo} ref={currentItemRef} alt="articleImg"/> :
                <img src={logo} alt="articleImg"/>}
        </div>
    )
}
export default NewsItem