import axios from "axios";
import { Dispatch } from "redux";
import { Tweet } from "../domains";

export interface FetchTweetsAction {
  type: "FETCH_TWEETS";
}

export interface FetchTweetsFulfilledAction {
  type: "FETCH_TWEETS_FULFILLED";
  payload: Tweet[];
}

export interface FetchTweetsRejectedAction {
  type: "FETCH_TWEETS_REJECTED";
  payload: Error;
}

export interface AddTweetAction {
  type: "ADD_TWEET";
  payload: Tweet;
}

export interface UpdateTweetAction {
  type: "UPDATE_TWEET";
  payload: Tweet;
}

export interface DeleteTweetAction {
  type: "DELETE_TWEET";
  payload: number;
}

export function fetchTweets(): (
  dispatch: Dispatch<
    FetchTweetsAction | FetchTweetsFulfilledAction | FetchTweetsRejectedAction
  >
) => void {
  return (dispatch) => {
    dispatch({ type: "FETCH_TWEETS" });
    axios
      .get<Tweet[]>("http://localhost:18080")
      .then((response) =>
        dispatch({ type: "FETCH_TWEETS_FULFILLED", payload: response.data })
      )
      .catch((err) =>
        dispatch({ type: "FETCH_TWEETS_REJECTED", payload: err })
      );
  };
}

export function addTweet(id: number, text: string): AddTweetAction {
  return {
    type: "ADD_TWEET",
    payload: { id, text },
  };
}

export function updateTweet(id: number, text: string): UpdateTweetAction {
  return {
    type: "UPDATE_TWEET",
    payload: { id, text },
  };
}

export function deleteTweet(id: number): DeleteTweetAction {
  return {
    type: "DELETE_TWEET",
    payload: id,
  };
}
