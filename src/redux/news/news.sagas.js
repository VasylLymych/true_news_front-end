import {takeEvery, put, call} from 'redux-saga/effects';
import {
    setUkraineNews,
    setWorldNews,
    setIsFetchingTrue,
    setIsFetchingFalse, setWorldNewsPageSize, setUkraineNewsPageSize, setNotificationTrue, setNotificationFalse,
} from "./news.actions";
import {
    GET_UKRAINE_NEWS,
    GET_WORLD_NEWS,
    GET_MORE_UKRAINE_NEWS,
    GET_MORE_WORLD_NEWS,
    HIDE_ALL_UKRAINE_NEWS, HIDE_ALL_WORLD_NEWS, GET_NOTIFICATION
} from "./news.types";
import newsAPI from "./../../api/newsAPI"

function* getWorldNewsWorker({payload}) {
    try {
        yield put(setIsFetchingTrue())
        const data = yield call(newsAPI.getWorldNews,payload)
        yield put(setIsFetchingFalse())
        yield put(setWorldNews(data))
    } catch (e) {
        console.log(e);
    }

}

function* getUkraineNewsWorker({payload}) {
    try {
        yield put(setIsFetchingTrue())
        const data = yield call(newsAPI.getUkraineNews,payload)
        console.log(data);
        yield put(setIsFetchingFalse())
        yield put(setUkraineNews(data))
    } catch (e) {
        console.log(e);
    }
}

function* getMoreWorldNewsWorker({payload}) {
    yield put(setWorldNewsPageSize(payload))
    yield getWorldNewsWorker({payload})
}

function* getMoreUkraineNewsWorker({payload}) {
    yield put(setUkraineNewsPageSize(payload))
    yield getUkraineNewsWorker({payload})
}

function* hideAllUkraineNewsWorker() {
    yield put(setUkraineNewsPageSize(5))
    yield yield getUkraineNewsWorker({payload: 5})
}

function* hideAllWorldNewsWorker() {
    yield put(setWorldNewsPageSize(5))
    yield getWorldNewsWorker({payload: 5})
}


function* notificationWorker() {
    const delay = () => new Promise(resolve => setTimeout(resolve, 5000))
    yield put(setNotificationTrue())
    yield call(delay)
    yield put(setNotificationFalse())
}

export default function* newsSagasWatcher() {
    yield(takeEvery(GET_WORLD_NEWS, getWorldNewsWorker))
    yield (takeEvery(GET_UKRAINE_NEWS, getUkraineNewsWorker))
    yield (takeEvery(GET_MORE_WORLD_NEWS, getMoreWorldNewsWorker))
    yield (takeEvery(GET_MORE_UKRAINE_NEWS, getMoreUkraineNewsWorker))
    yield (takeEvery(HIDE_ALL_UKRAINE_NEWS, hideAllUkraineNewsWorker))
    yield (takeEvery(HIDE_ALL_WORLD_NEWS, hideAllWorldNewsWorker))
    yield (takeEvery(GET_NOTIFICATION, notificationWorker))
}