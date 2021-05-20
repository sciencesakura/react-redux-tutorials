import { Dispatcher } from "flux";
import { TodoModel } from "./domains";

interface CreateAction {
  type: "CREATE_TODO";
  text: string;
}

interface DeleteAction {
  type: "DELETE_TODO";
  id: number;
}

interface FetchAction {
  type: "FETCH_TODOS";
}

interface ReceiveAction {
  type: "RECEIVE_TODOS";
  todos: TodoModel[];
}

export type Action = CreateAction | DeleteAction | FetchAction | ReceiveAction;

export default new Dispatcher<Action>();
