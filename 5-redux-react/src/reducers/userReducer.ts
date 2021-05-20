import { Reducer } from "redux";
import { Action } from "../actions";
import { User } from "../domains";

export interface UserState {
  user: User;
  fetching: boolean;
  fetched: boolean;
  error?: Error;
}

const reducer: Reducer<UserState, Action> = (
  state = {
    user: {
      id: 0,
      name: "",
      age: 0,
    },
    fetching: false,
    fetched: false,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, fetching: true };
    case "FETCH_USER_REJECTED":
      return { ...state, fetching: false, error: action.payload };
    case "FETCH_USER_FULFILLED":
      return {
        ...state,
        user: action.payload,
        fetching: false,
        fetched: true,
      };
    case "SET_USER_NAME":
      return { ...state, user: { ...state.user, name: action.payload } };
    case "SET_USER_AGE":
      return { ...state, user: { ...state.user, age: action.payload } };
    default:
      return state;
  }
};

export default reducer;
