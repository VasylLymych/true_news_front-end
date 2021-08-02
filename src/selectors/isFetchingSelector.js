import {createSelector} from "reselect";

const getIsFetching = state => state.news.isFetching;
const isFetchingSelector = createSelector(getIsFetching, isFetching => isFetching);

export default isFetchingSelector