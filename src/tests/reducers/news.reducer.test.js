import newsReducer from "../../redux/news/news.reducer";
import {
    SET_CURRENT_NEWS_ARTICLE,
    SET_IS_FETCHING_FALSE,
    SET_IS_FETCHING_TRUE, SET_NOTIFICATION_FALSE, SET_NOTIFICATION_TRUE,
    SET_UKRAINE_NEWS,
    SET_UKRAINE_NEWS_PAGE_SIZE,
    SET_WORLD_NEWS,
    SET_WORLD_NEWS_PAGE_SIZE
} from "../../redux/news/news.types";

const initialState = {
    UkraineNews: [],
    worldNews: [],
    UkraineNewsPageSize: 5,
    worldNewsPageSize: 5,
    isFetching: false,
    notification: false,
    currentNewsArticle: {}
}

const UkraineNewsPayload = [{title: "firstU"}, {title: "secondU"}, {title: "thirdU"}];
const worldNewsPayload = [{title: "firstW"}, {title: "secondW"}, {title: "thirdW"}];
const currentNewsArticlePayload = {title: "currentN"};
const UkraineNewsPageSizePayload = 15;
const worldNewsPageSizePayload = 40;
const callReducer = action => newsReducer(initialState, action);
const checkIfStateEqual = (prevState = initialState, newState) => prevState === newState;

describe("newsReducer test", () => {
    test("set Ukraine news", () => {
        const updatedState = callReducer({type: SET_UKRAINE_NEWS, payload: UkraineNewsPayload});
        expect(updatedState.UkraineNews).toBe(UkraineNewsPayload)
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set world news false", () => {
        const updatedState = callReducer({type: SET_WORLD_NEWS, payload: worldNewsPayload});
        expect(updatedState.worldNews).toBe(worldNewsPayload);
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set Ukraine news page size", () => {
        const updatedState = callReducer({type: SET_UKRAINE_NEWS_PAGE_SIZE, payload: UkraineNewsPageSizePayload});
        expect(updatedState.UkraineNewsPageSize).toBe(UkraineNewsPageSizePayload);
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set world news page size", () => {
        const updatedState = callReducer({type: SET_WORLD_NEWS_PAGE_SIZE, payload: worldNewsPageSizePayload});
        expect(updatedState.worldNewsPageSize).toBe(worldNewsPageSizePayload);
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set is fetching true", () => {
        const updatedState = callReducer({type: SET_IS_FETCHING_TRUE});
        expect(updatedState.isFetching).toBeTruthy();
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set is fetching false", () => {
        const updatedState = callReducer({type: SET_IS_FETCHING_FALSE});
        expect(updatedState.isFetching).toBeFalsy();
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set notification true", () => {
        const updatedState = callReducer({type: SET_NOTIFICATION_TRUE});
        expect(updatedState.notification).toBeTruthy();
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set notification false", () => {
        const updatedState = callReducer({type: SET_NOTIFICATION_FALSE});
        expect(updatedState.notification).toBeFalsy();
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
    test("set current news article", () => {
        const updatedState = callReducer({type: SET_CURRENT_NEWS_ARTICLE, payload: currentNewsArticlePayload});
        expect(updatedState.currentNewsArticle).toBe(currentNewsArticlePayload);
        expect(checkIfStateEqual(updatedState)).toBeFalsy()
    })
})