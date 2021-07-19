import {createSelector} from "reselect";

const getUkraineNewsPageSize = state => state.news.UkraineNewsPageSize;

const ukraineNewsPageSizeSelector = createSelector(getUkraineNewsPageSize, UkraineNewsPageSize => UkraineNewsPageSize);

export default ukraineNewsPageSizeSelector