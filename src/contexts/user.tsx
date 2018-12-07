import React from "react";
import { User } from "../models/user";
import { Omit, withContext } from ".";

let count = 0;
const value = {
  user: { name: (count++).toString() },
  // tslint:disable-next-line:no-object-literal-type-assertion
  async login(username: string, password: string) { return {} as User; },
};
// tslint:disable-next-line:variable-name
export const UserContext = React.createContext(value);

type UserState = typeof value;

export class UserContextDefaultProvider extends React.Component<{}, UserState, {}> {
  login = async (username: string, password: string) => {
    // tslint:disable-next-line:no-object-literal-type-assertion
    const user = { name: (count++).toString() } as User;
    this.setState({
      user,
    });
    return user;
  }

  state = {
    ...value, ...{
      login: this.login,
    },
  };

  render() {
    return (
      <UserContext.Provider value={this.state} >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
