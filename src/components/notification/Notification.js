import React from "react";
import notification from "./../../notification.mp3"

const Notification = () => {
    return (
        <div className="notificationWrapper">
            <span>{`Було додано новини`}</span>
            <audio autoPlay>
                <source src={notification} type="audio/mpeg"/>
            </audio>
        </div>
    )
}

export default Notification