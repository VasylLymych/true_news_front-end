import {combineReducers} from 'redux'
import newsReducer from "./news/news.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({news: newsReducer, auth: authReducer})

export default rootReducer