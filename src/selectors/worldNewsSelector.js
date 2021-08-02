import {createSelector} from 'reselect'

const getWorldNews = state => state.news.worldNews
const worldNewsSelector = createSelector(getWorldNews, worldNews => worldNews);

export default worldNewsSelector