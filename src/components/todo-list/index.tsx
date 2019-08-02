import * as React from "react";
import { Todo } from "../todo";
import { Todo as TodoModel } from "../../models/todo";

// tslint:disable-next-line:naming-convention variable-name only-arrow-functions
export const TodoList: React.SFC<{ todos: TodoModel[] }> = function(props) {
  const a = props.todos.map((todo) => <Todo key={(new Date().getTime() + Math.random()).toString()} todo={todo} />);
  return <div>{a}</div>;
};
