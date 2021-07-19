import {combineReducers} from 'redux'
import newsReducer from "./news/news.reducer";

const rootReducer = combineReducers({news: newsReducer})

export default rootReducer