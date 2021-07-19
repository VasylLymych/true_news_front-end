import React from "react";
import loadingGif from "../../loading.gif";
import s from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={s.preloaderWrapper}>
            <img src={loadingGif} alt="loading"/>
        </div>
    )
}

export default Preloader