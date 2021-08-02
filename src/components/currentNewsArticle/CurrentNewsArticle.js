import React from "react";
import s from "./../content.style/Content.module.css"

const CurrentNewsArticle = props => {
    return (
        <div className={s.content_wrapper}>
            <span>{props.article.title}</span>
            <p className={s.newsArticleWrapper}>{props.article.description}</p>
            <span>{props.article.date}</span>
        </div>
    )
}

export default CurrentNewsArticle