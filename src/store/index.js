import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import movieReducer from "./reducer/MovieReducer";
import favoriteReducer from "./reducer/favoriteReducer";
import logger from "redux-logger";

const dukkanReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

const dukkan = createStore(dukkanReducer, applyMiddleware(logger));

export default dukkan;
