import React from "react";
import s from './../content.style/Content.module.css'
import NewsItem from "../newsItem/NewsItem";
import GetMore from "../getMore/GetMore";
import HideAll from "../hideAll/HideAll";

const WorldNews = props => {
    const currentN = props.worldNews.length - 5;

    return (
        <main className={s.content_wrapper}>
            {props.worldNews.map((el, i) =>
                currentN === i ?
                    <NewsItem currentN={true} photo={el.photo} key={el._id} title={el.title} id={el._id}/> :
                    <NewsItem key={el._id} photo={el.photo}  title={el.title} id={el._id}/>)}
            <GetMore getMoreNews={props.getMoreWNews} pageSize={props.worldNewsPageSize}/>
            {props.worldNews.length > 5 ? <HideAll hideAllNews={props.hideAllWNews}/> : null}

        </main>
    )
}
export default WorldNews