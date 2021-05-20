import {
  FetchTweetsAction,
  FetchTweetsFulfilledAction,
  FetchTweetsRejectedAction,
  AddTweetAction,
  UpdateTweetAction,
  DeleteTweetAction,
} from "./tweetsActions";
import {
  FetchUserAction,
  FetchUserFulfilledAction,
  FetchUserRejectedAction,
  SetUserNameAction,
  SetUserAgeAction,
} from "./userActions";

export type Action =
  | FetchTweetsAction
  | FetchTweetsFulfilledAction
  | FetchTweetsRejectedAction
  | AddTweetAction
  | UpdateTweetAction
  | DeleteTweetAction
  | FetchUserAction
  | FetchUserFulfilledAction
  | FetchUserRejectedAction
  | SetUserNameAction
  | SetUserAgeAction;
