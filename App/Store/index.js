// @flow
import { createStore, compose } from "redux";
import { persistStore } from "redux-persist";
import Reducers from "Romulus/App/Reducers";
import Middleware from "Romulus/App/Store/Middleware";

export const store = createStore(Reducers, compose(Middleware));
export const persistor = persistStore(store);
