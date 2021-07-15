import React from "react";
import s from "./loadMore.module.css"

const LoadMore = props => {
    return <div onClick={() => {
        props.changePSize(props.pageSize,props.path);
    }} className={s.loadMoreWrapper}>Загрузити ще</div>
}

export default LoadMore