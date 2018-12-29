import * as React from "react";
import { UserContext } from "../../contexts/user";
import { ThemeContext } from "../../contexts/theme";

// tslint:disable:naming-convention variable-name only-arrow-functions jsx-no-multiline-js
export const Todo: React.SFC<{ key: string; todo: { text: string; completed: boolean } }> = function(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => (
        <UserContext.Consumer>
          {({ user }) =>
            <div style={{ backgroundColor: theme.backgroundColor, color: "white" }}>
              {props.todo.text}{user ? user.name : "未登录"}<button onClick={changeTheme}>切换主题</button>
            </div>}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};
