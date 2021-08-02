import {createSelector} from 'reselect'

const getUkraineNews = state => state.news.UkraineNews
const UkraineNewsSelector = createSelector(getUkraineNews, UkraineNews => UkraineNews);

export default UkraineNewsSelector