import React, {useEffect} from "react";
import WorldNews from "./WorldNews";
import {connect} from "react-redux";
import worldNewsSelector from "../../selectors/worldNewsSelector";
import {getMoreWorldNews, getWorldNews, hideAllWorldNews} from "../../redux/news/news.actions";
import isFetchingSelector from "../../selectors/isFetchingSelector";
import IsLoading from "../../hocs/IsLoading";
import worldNewsPageSizeSelector from "../../selectors/worldNewsPageSizeSelector";

const WorldNewsContainer = props => {
    useEffect(() => props.getWNews(props.worldNewsPageSize), [])

    return (
        <IsLoading isFetching={props.isFetching}>
            <WorldNews worldNews={props.worldNews} worldNewsPageSize={props.worldNewsPageSize}
                       getMoreWNews={props.getMoreWNews} hideAllWNews={props.hideAllWNews}/>
        </IsLoading>
    )
}
const mapStateToProps = state => (
    {
        worldNews: worldNewsSelector(state),
        isFetching: isFetchingSelector(state),
        worldNewsPageSize: worldNewsPageSizeSelector(state)
    }
)
const mapDispatchToProps = dispatch => (
    {
        getWNews: payload => dispatch(getWorldNews(payload)),
        getMoreWNews: payload => dispatch(getMoreWorldNews(payload + 5)),
        hideAllWNews: () => dispatch(hideAllWorldNews())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(WorldNewsContainer)