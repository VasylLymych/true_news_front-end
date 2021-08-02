import {
    GET_UKRAINE_NEWS,
    GET_WORLD_NEWS,
    SET_UKRAINE_NEWS,
    SET_WORLD_NEWS,
    SET_IS_FETCHING_TRUE,
    SET_IS_FETCHING_FALSE,
    SET_UKRAINE_NEWS_PAGE_SIZE,
    SET_WORLD_NEWS_PAGE_SIZE,
    GET_MORE_UKRAINE_NEWS,
    GET_MORE_WORLD_NEWS,
    HIDE_ALL_WORLD_NEWS,
    HIDE_ALL_UKRAINE_NEWS,
    SET_NOTIFICATION_TRUE,
    SET_NOTIFICATION_FALSE,
    GET_NOTIFICATION, SET_CURRENT_NEWS_ARTICLE, GET_CURRENT_NEWS_ARTICLE
} from "./news.types";

export const getUkraineNews = payload => ({type: GET_UKRAINE_NEWS, payload});
export const getCurrentNewsArticle = payload => ({type: GET_CURRENT_NEWS_ARTICLE, payload});
export const setCurrentNewsArticle = payload => ({type: SET_CURRENT_NEWS_ARTICLE, payload});
export const getWorldNews = payload => ({type: GET_WORLD_NEWS, payload});
export const getMoreUkraineNews = payload => ({type: GET_MORE_UKRAINE_NEWS, payload});
export const getMoreWorldNews = payload => ({type: GET_MORE_WORLD_NEWS, payload});
export const hideAllWorldNews = () => ({type: HIDE_ALL_WORLD_NEWS});
export const hideAllUkraineNews = () => ({type: HIDE_ALL_UKRAINE_NEWS});
export const setUkraineNews = payload => ({type: SET_UKRAINE_NEWS, payload});
export const setWorldNews = payload => ({type: SET_WORLD_NEWS, payload});
export const setUkraineNewsPageSize = payload => ({type: SET_UKRAINE_NEWS_PAGE_SIZE, payload});
export const setWorldNewsPageSize = payload => ({type: SET_WORLD_NEWS_PAGE_SIZE, payload});
export const setIsFetchingTrue = () => ({type: SET_IS_FETCHING_TRUE});
export const setIsFetchingFalse = () => ({type: SET_IS_FETCHING_FALSE});
export const setNotificationTrue = () => ({type: SET_NOTIFICATION_TRUE});
export const setNotificationFalse = () => ({type: SET_NOTIFICATION_FALSE});
export const getNotification = () => ({type: GET_NOTIFICATION});