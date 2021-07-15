import {createSelector} from "reselect";

const getPageSize = state => state.news.pageSize;

const pageSizeSelector = createSelector(getPageSize, pageSize => pageSize);

export default pageSizeSelector