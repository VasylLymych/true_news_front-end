import React, {useEffect} from "react";
import Content from "./Content";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter, Route, Switch} from 'react-router-dom'
import UkraineNewsSelector from "../../selectors/UkraineNewsSelector";
import worldNewsSelector from "../../selectors/worldNewsSelector";

const ContentContainer = props => {
    useEffect(() => {
        props.getUkraineNews()
        props.getWorldNews()
    })
    return (
        <Switch>
            <Route exact path='/UkraineNews' render={() => <Content news={props.UkraineNews}/>}/>
            <Route exact path='/worldNews' render={() => <Content news={props.worldNews}/>}/>
        </Switch>
    )
}
const mapStateToProps = state => (
    {
        UkraineNews: UkraineNewsSelector(state),
        worldNews: worldNewsSelector(state)
    }
)
const mapDispatchToProps = dispatch => (
    {
        getUkraineNews: () => 1,
        getWorldNews: () => 1
    }
)

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ContentContainer)