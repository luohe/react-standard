import * as React from "react";

export class Todo extends React.Component<{ key: string, todo: { text: string, completed: boolean } }> {

    public render() {
        return <div>{this.props.todo.text}</div>;
    }
}