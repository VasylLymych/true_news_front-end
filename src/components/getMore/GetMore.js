import React from "react";
import s from "./GetMore.module.css"

const GetMore = props => {

    return <div onClick={() => {
        props.getMoreNews(props.pageSize)

    }} className={s.getMoreWrapper}>Загрузити ще</div>
}

export default GetMore