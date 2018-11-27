import React from 'react';
import { Omit, withContext } from '.';

let count = 0;
const value = {
    theme: {
        name: (count++).toString(),
        /** 颜色 */
        backgroundColor: "blue"
    },
    changeTheme: function () { return {} }
}

type ThemeState = typeof value;

export const ThemeContext = React.createContext(value);

export class ThemeContextDefaultProvider extends React.Component<{}, ThemeState, {}>{
    changeTheme = async () => {
        let theme = { name: (count++).toString(), backgroundColor: this.state.theme.backgroundColor === "blue" ? "black" : "blue" };
        this.setState({
            theme: theme
        });
        return theme;
    }

    state = {
        ...value, ...{
            changeTheme: this.changeTheme
        }
    };

    render() {
        return (
            <ThemeContext.Provider value={this.state} >
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}