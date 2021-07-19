import React from "react";
import {connect} from "react-redux";
import App from "./App";
import {getNotification, getUkraineNews, getWorldNews} from "./redux/news/news.actions";
import socket from "./socket";

const AppContainer = props => {
    console.log(props);
    socket.on("connect", () => console.log("connected"))
    socket.on("UkraineNewsItemAdded", () => {
        props.getN();
        props.getUkraineNews()
    })
    socket.on("worldNewsItemAdded", () => {
        props.getN();
        props.getWorldNews()
    })

    return (
        <App notification={props.notification}/>
    )
}

const mapStateToProps = state => ({
    notification: state.news.notification,
    pageSize: state.news.pageSize
});

const mapDispatchToProps = dispatch => ({
    getUkraineNews: () => dispatch(getUkraineNews(5)),
    getWorldNews: () => dispatch(getWorldNews(5)),
    getN: () => dispatch(getNotification())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)