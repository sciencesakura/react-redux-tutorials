import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
  Reducer,
} from "redux";

interface User {
  name: string;
  age: number;
}

interface Tweet {
  id: number;
  text: string;
}

interface State {
  user: User;
  tweets: Tweet[];
}

interface ChangeNameAction {
  type: "CHANGE_NAME";
  payload: string;
}

interface ChangeAgeAction {
  type: "CHANGE_AGE";
  payload: number;
}

interface AddTweetAction {
  type: "ADD_TWEET";
  payload: string;
}

type Action = ChangeNameAction | ChangeAgeAction | AddTweetAction;

const userReducer: Reducer<User, Action> = (
  state = { name: "", age: 0 },
  action
) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};

const tweetReducer: Reducer<Tweet[], Action> = (state = [], action) => {
  switch (action.type) {
    case "ADD_TWEET":
      return [...state, { id: Date.now(), text: action.payload }];
    default:
      return state;
  }
};

const reducers = combineReducers<State, Action>({
  user: userReducer,
  tweets: tweetReducer,
});

const logger: Middleware = () => (next) => (action) => {
  console.log("action fired", action);
  next(action);
};
const error: Middleware = () => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log("Error was occured", e);
  }
};
const middleware = applyMiddleware(logger, error);

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({ type: "CHANGE_NAME", payload: "Jack" });
store.dispatch({ type: "CHANGE_AGE", payload: 35 });
store.dispatch({ type: "CHANGE_AGE", payload: 36 });
store.dispatch({ type: "ADD_TWEET", payload: "OMG LIKE LOL" });
store.dispatch({
  type: "ADD_TWEET",
  payload: "I am so like seriously like totally like right now",
});
