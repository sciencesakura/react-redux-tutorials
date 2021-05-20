import { EventEmitter } from "events";
import { TodoModel } from "../domains";
import dispatcher, { Action } from "../dispatcher";

class TodoStore extends EventEmitter {
  #todos: TodoModel[];

  constructor() {
    super();
    this.#todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false,
      },
      {
        id: 235684679,
        text: "Pay Water Bills",
        complete: false,
      },
    ];
  }

  createTodo(text: string): void {
    const id = Date.now();
    this.#todos.push({
      id,
      text,
      complete: false,
    });
    this.emit("change");
  }

  receiveTodos(todos: TodoModel[]) {
    this.#todos = todos;
    this.emit("change");
  }

  getAll(): TodoModel[] {
    return this.#todos;
  }

  handleActions(action: Action) {
    switch (action.type) {
      case "CREATE_TODO":
        this.createTodo(action.text);
        break;
      case "RECEIVE_TODOS":
        this.receiveTodos(action.todos);
        break;
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;
