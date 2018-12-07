import * as React from "react";
import { Todo } from "../todo";

// tslint:disable-next-line:naming-convention variable-name only-arrow-functions
export const TodoList: React.SFC<{ todos: { text: string; completed: boolean }[] }> = function(props) {
  const a = props.todos.map((todo) => <Todo key={(new Date().getTime() + Math.random()).toString()} todo={todo} />);
  return <div>{a}</div>;
};
