import React from "react";

let count = 0;
const value = {
  theme: {
    name: (count++).toString(),
        /** 颜色 */
    backgroundColor: "blue",
  },
  changeTheme() { return {}; },
};

type ThemeState = typeof value;

// tslint:disable-next-line:variable-name
export const ThemeContext = React.createContext(value);

/**
 * 主题contex
 *
 * @author 张卓诚
 * @export
 * @class ThemeContextDefaultProvider
 * @extends {React.Component<{}, ThemeState, {}>}
 */
export class ThemeContextDefaultProvider extends React.Component<{}, ThemeState, {}> {
  /**
   * 切换主题
   *
   * @memberof ThemeContextDefaultProvider
   */
  changeTheme = async () => {
    const theme = { name: (count++).toString(), backgroundColor: this.state.theme.backgroundColor === "blue" ? "black" : "blue" };
    this.setState({
      theme,
    });
    return theme;
  }

  state = {
    ...value, ...{
      changeTheme: this.changeTheme,
    },
  };

  render() {
    return (
            <ThemeContext.Provider value={this.state} >
                {this.props.children}
            </ThemeContext.Provider>
    );
  }
}
