import * as React from "react";
import { TodoList } from "../../components/todo-list";

/**
 * 待办事项列表
 *
 * @author 张卓诚
 * @export
 * @class Todos
 * @extends {React.PureComponent}
 */
export class Todos extends React.PureComponent {
  public state = {
    text: "new todo",
    todos: [
      { text: "task1", completed: true },
    ],
  };

  /**
   * 更换文本
   *
   * @memberof Todos
   */
  public changeText = (event: any) => {
    this.setState({ text: event.target.value });
  }

  /**
   * 增加事项
   *
   * @memberof Todos
   */
  public add = () => {
    this.setState(
      {
        text: "",
        todos: [{ text: this.state.text, completed: false }, ...this.state.todos],
      },
    );
  }

  /**
   * 按回车提交事项
   *
   * @memberof Todos
   */
  public enter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      this.add();
    }
  }
  public componentDidMount() { }

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
