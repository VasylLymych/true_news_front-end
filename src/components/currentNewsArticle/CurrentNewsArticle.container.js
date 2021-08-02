import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {getCurrentNewsArticle} from "../../redux/news/news.actions";
import CurrentNewsArticle from "./CurrentNewsArticle";

const CurrentNewsArticleContainer = props => {
    useEffect(() => {
        props.getCurrentNewsArticle(props.match.params.articleId)
    }, [])

    return <CurrentNewsArticle article={props.currentNewsArticle}/>
}

const mapStateToProps = state => ({
    currentNewsArticle: state.news.currentNewsArticle
})
const mapDispatchToProps = dispatch => ({
    getCurrentNewsArticle: payload => dispatch(getCurrentNewsArticle(payload)),
})

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(CurrentNewsArticleContainer)