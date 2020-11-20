import { createStore, applyMiddleware, compose } from "redux";
import middlewares from "./middlewares";

import {rootReducer} from './store';
import sagaMiddleware, {rootSaga} from "./middlewares/saga";

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
);

const initialState = {};
const store = createStore(rootReducer, initialState, enhancer);
sagaMiddleware.run(rootSaga);

export default store;

