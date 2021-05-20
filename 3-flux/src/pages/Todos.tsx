import React from "react";
import { RouteComponentProps } from "react-router";

import * as TodoActions from "../actions/TodoActions";
import Todo from "../components/Todo";
import { TodoModel } from "../domains";
import TodoStore from "../stores/TodoStore";

type Props = RouteComponentProps;

interface State {
  todos: TodoModel[];
}

export default class Todos extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentDidMount(): void {
    TodoStore.on("change", this.getTodos);
    console.log("count", TodoStore.listenerCount("change"));
  }

  componentWillUnmount(): void {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos(): void {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  createTodo(): void {
    TodoActions.createTodo("new Todo");
  }

  reloadTodos(): void {
    TodoActions.reloadTodos();
  }

  render(): React.ReactNode {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo} />;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
