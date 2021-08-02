import React from "react";
import socket from "../../socket";
import {getNotification, getUkraineNews, getWorldNews} from "../../redux/news/news.actions";
import {connect} from "react-redux";
import UkraineNewsPageSizeSelector from "../../selectors/UkraineNewsPageSizeSelector";
import worldNewsPageSizeSelector from "../../selectors/worldNewsPageSizeSelector";
import Notification from "./Notification";
import notificationSelector from "../../selectors/notificationSelector";

const NotificationContainer = props => {
    socket.on("UkraineNewsItemAdded", () => {
        props.getN();
        props.getUNews(props.UkraineNewsPageSize)
    })
    socket.on("worldNewsItemAdded", () => {
        props.getN();
        props.getWNews(props.UkraineNewsPageSize)
    })

    return props.notification ? <Notification/> : null

}

const mapStateToProps = state => ({
    UkraineNewsPageSize: UkraineNewsPageSizeSelector(state),
    worldNewsPageSize: worldNewsPageSizeSelector(state),
    notification: notificationSelector(state)
})
const mapDispatchToProps = dispatch => ({
    getUNews: payload => dispatch(getUkraineNews(payload)),
    getWNews: payload => dispatch(getWorldNews(payload)),
    getN: () => dispatch(getNotification())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer)