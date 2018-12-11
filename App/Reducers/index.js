// @flow
import { persistCombineReducers } from "redux-persist";
import { ENV, STORAGE_PREFIX } from "Romulus/App/Config";
import storage from "redux-persist/src/storage";
import App from "Romulus/App/Reducers/App";

const config = {
  key: STORAGE_PREFIX,
  debug: ENV === "development",
  storage,
};

const reducers = persistCombineReducers(config, {
  app: App,
});

export default reducers;
