import React from "react";
import notification from "./../../notification.mp3"
import s from "./Notification.module.css"

const Notification = () => {
    return (
        <div className={s.notificationWrapper}>
            <span>Було додано новини</span>
            <audio autoPlay>
                <source src={notification} type="audio/mpeg"/>
            </audio>
        </div>
    )
}

export default Notification