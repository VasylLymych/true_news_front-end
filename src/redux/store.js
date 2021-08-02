import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import rootReducer from "./root.reducer";
import rootSaga from "./root.saga";

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga)

export default store