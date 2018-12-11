// @flow
import createSagaMiddleware from "redux-saga";
import RootSaga from "Romulus/App/Sagas";

const sagaMiddleware = createSagaMiddleware();

const runSagaMiddleware = () => {
  sagaMiddleware.run(RootSaga);
};

export default sagaMiddleware;
export { runSagaMiddleware };
