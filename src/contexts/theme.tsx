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

export class ThemeContextDefaultProvider extends React.Component<{}, ThemeState, {}> {
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
