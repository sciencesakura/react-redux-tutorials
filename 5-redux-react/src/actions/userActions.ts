import { User } from "../domains";

export interface FetchUserAction {
  type: "FETCH_USER";
}

export interface FetchUserFulfilledAction {
  type: "FETCH_USER_FULFILLED";
  payload: User;
}

export interface FetchUserRejectedAction {
  type: "FETCH_USER_REJECTED";
  payload: Error;
}

export interface SetUserNameAction {
  type: "SET_USER_NAME";
  payload: string;
}

export interface SetUserAgeAction {
  type: "SET_USER_AGE";
  payload: number;
}

export function fetchUser(): FetchUserFulfilledAction {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      id: 0,
      name: "Jack",
      age: 35,
    },
  };
}

export function setUserName(name: string): SetUserNameAction {
  return {
    type: "SET_USER_NAME",
    payload: name,
  };
}

export function setUserAge(age: number): SetUserAgeAction {
  return {
    type: "SET_USER_AGE",
    payload: age,
  };
}
