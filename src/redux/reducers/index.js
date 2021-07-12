import {combineReducers} from 'redux'
import newsReducer from "./newsReducer/newsReducer";

const globalReducer = combineReducers({news: newsReducer})

export default globalReducer