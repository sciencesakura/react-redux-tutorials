import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { Config, createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";
import reducer from "./reducers";

const config = { types: { fulfilled: "success" } } as Config;
const promise = createPromise(config);
const middleware = applyMiddleware(promise, thunk, createLogger());

export default createStore(reducer, middleware);
