import {combineReducers} from 'redux'
import newsReducer from "./news/news.reducer";

const globalReducer = combineReducers({news: newsReducer})

export default globalReducer