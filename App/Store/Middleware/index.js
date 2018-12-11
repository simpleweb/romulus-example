// @flow
import { applyMiddleware } from "redux";
import Buffer from "Romulus/App/Store/Middleware/Buffer";
import Saga from "Romulus/App/Store/Middleware/Saga";

const middlewares = [Buffer, Saga];

if (process.env.NODE_ENV === "development") {
  const Logger = require("./Logger.js");
  middlewares.push(Logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
