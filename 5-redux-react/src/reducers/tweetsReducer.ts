import { Reducer } from "redux";
import { Action } from "../actions";
import { Tweet } from "../domains";

export interface TweetsState {
  tweets: Tweet[];
  fetching: boolean;
  fetched: boolean;
  error?: Error;
}

const reducer: Reducer<TweetsState, Action> = (
  state = {
    tweets: [],
    fetching: false,
    fetched: false,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_TWEETS":
      return { ...state, fetching: true };
    case "FETCH_TWEETS_REJECTED":
      return { ...state, fetching: false, error: action.payload };
    case "FETCH_TWEETS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        tweets: action.payload,
      };
    case "ADD_TWEET":
      return { ...state, tweets: [...state.tweets, action.payload] };
    case "UPDATE_TWEET": {
      const tweets = [...state.tweets];
      const index = tweets.findIndex((t) => t.id === action.payload.id);
      tweets[index] = action.payload;
      return { ...state, tweets };
    }
    case "DELETE_TWEET":
      return {
        ...state,
        tweets: state.tweets.filter((t) => t.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
