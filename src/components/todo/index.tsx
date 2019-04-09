import * as React from "react";

// tslint:disable:naming-convention variable-name only-arrow-functions jsx-no-multiline-js
export const Todo: React.SFC<{ key: string; todo: { text: string; completed: boolean } }> = function(props) {
  return (
    <div style={{color: "white" }}>
      {props.todo.text}
    </div>
  );
};
