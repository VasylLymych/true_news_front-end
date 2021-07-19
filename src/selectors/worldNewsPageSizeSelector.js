import {createSelector} from "reselect";

const getWorldNewsPageSize = state => state.news.worldNewsPageSize;

const worldNewsPageSizeSelector = createSelector(getWorldNewsPageSize, worldNewsPageSize => worldNewsPageSize);

export default worldNewsPageSizeSelector