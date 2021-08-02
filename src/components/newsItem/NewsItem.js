import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import s from "./NewsItem.module.css"

const NewsItem = props => {
    const currentItemRef = useRef();

    useEffect(() => props.currentN ? currentItemRef.current.scrollIntoView({block: "start"}) : null, []);

    return (
        <div className={s.newsItemWrapper} ref={props.currentN ? currentItemRef : null}>
            <h2 className={s.newsItemWrapper}>{<NavLink className={s.newsItemNav}
                                                        to={`/${props.id}`}>{props.title}</NavLink>}</h2>
            {props.currentN ?
                <img
                    src={`http://localhost:5000/${props.photo.split("\\")[1]}/${props.photo.split("\\")[2]}`}
                    ref={currentItemRef}
                    alt="articleImg"/> :
                <img src={`http://localhost:5000/${props.photo.split("\\")[1]}/${props.photo.split("\\")[2]}`}
                     alt="articleImg"/>}
        </div>
    )
}

export default NewsItem