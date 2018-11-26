import * as React from "react";
import { Todo } from "../todo";

export const TodoList: React.SFC<{ todos: Array<{ text: string, completed: boolean }> }> = function (props) {
    const a = props.todos.map((todo) => <Todo key={(new Date().getTime() + Math.random()).toString()} todo={todo} />);
    return <div>{a}</div>;
}