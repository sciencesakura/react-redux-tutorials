import dispatcher from "../dispatcher";

export function createTodo(text: string): void {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id: number): void {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos(): void {
  dispatcher.dispatch({ type: "FETCH_TODOS" });
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVE_TODOS",
      todos: [
        {
          id: 213464613,
          text: "Go shopping again",
          complete: false,
        },
        {
          id: 335684679,
          text: "Sleep at the yard",
          complete: true,
        },
      ],
    });
  }, 1000);
}
