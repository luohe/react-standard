import * as React from "react";
import { Todo } from "../todo/todo";

export class TodoList extends React.Component<{ todos: Array<{ text: string, completed: boolean }> }>{

    public render() {
        const a = this.props.todos
            .map((todo) => <Todo key={(new Date().getTime() + Math.random()).toString()} todo={todo} />);
        return <div>{a}</div>;
    }
}