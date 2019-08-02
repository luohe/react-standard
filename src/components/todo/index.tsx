import * as React from "react";
import { Todo as TodoModel } from "../../models/todo";

// tslint:disable:naming-convention variable-name only-arrow-functions jsx-no-multiline-js
export const Todo: React.SFC<{todo: TodoModel}> = function(props) {
  return (
    <div style={{ color: "white" }}>
      {props.todo.text}
    </div>
  );
};
