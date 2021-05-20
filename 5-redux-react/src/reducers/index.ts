import { combineReducers } from "redux";
import { Action } from "../actions";
import tweetsReducer, { TweetsState } from "./tweetsReducer";
import userReducer, { UserState } from "./userReducer";

export interface State {
  tweetsReducer: TweetsState;
  userReducer: UserState;
}

export default combineReducers<State, Action>({ tweetsReducer, userReducer });
