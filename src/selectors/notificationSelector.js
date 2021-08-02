import {createSelector} from "reselect";

const getNotification = state => state.news.notification;
const notificationSelector = createSelector(getNotification, notification => notification)

export default notificationSelector