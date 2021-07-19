import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from "./root.reducer";
import newsSagas from "./news/news.sagas";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(newsSagas)
export default store