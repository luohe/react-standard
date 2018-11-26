import * as React from "react";
import { TodoList } from "../../components/todo-list";

export class Todos extends React.Component {
    public state = {
        text: "new todo",
        todos: [
            { text: "task1", completed: true },
        ],
    };
    public changeText = (event: any) => {
        this.setState({ text: event.target.value });
    }

    public add = () => {
        this.setState(
            {
                text: "",
                todos: [{ text: this.state.text, completed: false }, ...this.state.todos]
            }
        )
    }

    public enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // tslint:disable-next-line:no-console
        if (event.key === "Enter") {
            this.add();
        }
    }
    public componentDidMount() {
    }

    public render() {
        return (
            <div>
                
                <TodoList todos={this.state.todos}>{this.props.children}</TodoList>
                <input type="text" value={this.state.text} onChange={this.changeText} onKeyPress={this.enter} />
                <button onClick={this.add}>add</button>
            </div>
        );
    }
}