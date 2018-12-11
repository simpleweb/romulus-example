import { all, fork } from "redux-saga/effects";
import RequestExample from "Romulus/App/Sagas/RequestExample";

const rootSaga = function*() {
  yield all([fork(RequestExample)]);
};

export default rootSaga;
