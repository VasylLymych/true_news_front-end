import {all} from "redux-saga/effects"
import newsSagasWatcher from "./news/news.sagas";

export default function* rootSaga() {
    yield (all([newsSagasWatcher()]))
}