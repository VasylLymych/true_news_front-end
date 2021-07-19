import React from "react";
import s from './../content.style/Content.module.css'
import NewsItem from "../newsItem/NewsItem";
import GetMore from "../getMore/GetMore";
import HideAll from "../hideAll/HideAll";

const UkraineNews = props => {
    const currentN = props.UkraineNews.length - 5;

    return (
        <main className={s.content_wrapper}>
            {props.UkraineNews.map((el, i) =>
                currentN === i ? <NewsItem currentN={true} key={el.id} title={el.title} id={el.id}/> :
                    <NewsItem key={el._id} title={el.title} id={el._id}/>)}
            <GetMore getMoreNews={props.getMoreUNews} pageSize={props.UkraineNewsPageSize}/>
            {props.UkraineNews.length > 5 ? <HideAll hideAllNews={props.hideAllUNews}/> : null}
        </main>
    )
}

export default UkraineNews