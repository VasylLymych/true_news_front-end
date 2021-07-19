import {
    SET_UKRAINE_NEWS,
    SET_WORLD_NEWS,
    SET_IS_FETCHING_TRUE,
    SET_IS_FETCHING_FALSE,
    SET_UKRAINE_NEWS_PAGE_SIZE,
    SET_WORLD_NEWS_PAGE_SIZE,
    SET_NOTIFICATION_TRUE,
    SET_NOTIFICATION_FALSE
} from "./news.types";


const initialState = {
    UkraineNews: [],
    worldNews: [],
    UkraineNewsPageSize: 5,
    worldNewsPageSize: 5,
    isFetching: false,
    notification: false
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UKRAINE_NEWS: {
            return {...state, UkraineNews: action.payload}
        }
        case SET_WORLD_NEWS: {
            return {...state, worldNews: action.payload}
        }
        case SET_UKRAINE_NEWS_PAGE_SIZE: {
            return {...state, UkraineNewsPageSize: action.payload}
        }
        case SET_WORLD_NEWS_PAGE_SIZE: {
            return {...state, worldNewsPageSize: action.payload}
        }
        case SET_IS_FETCHING_TRUE: {
            return {...state, isFetching: true}
        }
        case SET_IS_FETCHING_FALSE: {
            return {...state, isFetching: false}
        }
        case SET_NOTIFICATION_TRUE: {
            return {...state, notification: true}
        }
        case SET_NOTIFICATION_FALSE: {
            return {...state, notification: false}
        }
        default: {
            return state
        }
    }
}

export default newsReducer