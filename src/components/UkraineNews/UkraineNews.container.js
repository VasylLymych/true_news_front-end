import React, {useEffect} from "react";
import UkraineNews from "./UkraineNews";
import {connect} from "react-redux";
import UkraineNewsSelector from "../../selectors/UkraineNewsSelector";
import {
    getMoreUkraineNews,
    getUkraineNews, hideAllUkraineNews
} from "../../redux/news/news.actions";
import IsLoading from "../../hocs/IsLoading";
import isFetchingSelector from "../../selectors/isFetchingSelector";
import ukraineNewsPageSizeSelector from "../../selectors/UkraineNewsPageSizeSelector";

const UkraineNewsContainer = props => {
    useEffect(() => props.getUNews(props.UkraineNewsPageSize), [])
    console.log(props.UkraineNews);
    return (
        <IsLoading isFetching={props.isFetching}>
            <UkraineNews UkraineNews={props.UkraineNews} UkraineNewsPageSize={props.UkraineNewsPageSize}
                         getMoreUNews={props.getMoreUNews} hideAllUNews={props.hideAllUNews}/>
        </IsLoading>
    )
}

const mapStateToProps = state => (
    {
        UkraineNews: UkraineNewsSelector(state),
        isFetching: isFetchingSelector(state),
        UkraineNewsPageSize: ukraineNewsPageSizeSelector(state)
    }
)
const mapDispatchToProps = dispatch => (
    {
        getUNews: payload => dispatch(getUkraineNews(payload)),
        getMoreUNews: payload => dispatch(getMoreUkraineNews(payload + 5)),
        hideAllUNews: () => dispatch(hideAllUkraineNews())
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(UkraineNewsContainer)