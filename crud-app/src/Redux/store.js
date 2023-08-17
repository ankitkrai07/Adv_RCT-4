import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  reducer as productReducer,
  getReducer as getProductReducer,
} from "./productReducer/reducer";
import { reducer as authReducer } from "./authReducer/reducer";

const rootReducer = combineReducers({
  productReducer,
  getProductReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
