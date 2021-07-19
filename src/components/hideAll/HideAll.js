import React from "react";
import s from "./hideAll.module.css"

const HideAll = props => {

    return <div onClick={() => {
        props.hideAllNews()
    }} className={s.hideAllWrapper}>Сховати всі</div>
}

export default HideAll