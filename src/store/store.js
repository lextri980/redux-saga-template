import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./saga/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);