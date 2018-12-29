import React from "react";
import { User } from "../models/user";
import userProvider from "../network/providers/user.provider";

/** 默认值 */
const defaultValue = {
  /** 登陆用户 */
  user: undefined as (User | undefined),
  /** 登入 */
  async login(username: string, password: string) { return { name: username }; },
  /** 登出 */
  async logout() {},
  /** 已登陆 */
  isLogin: false,
};
// tslint:disable-next-line:variable-name
export const UserContext = React.createContext(defaultValue);

export type UserState = typeof defaultValue;

export class UserContextDefaultProvider extends React.Component<{}, UserState, {}> {

  /**
   * 应用初始化时自动尝试登陆
   *
   * @author 张卓诚
   * @date 2018-12-29
   * @memberof UserContextDefaultProvider
   */
  componentDidMount() {
    userProvider.checkLogin()
      .then(
        res => {
          this.setState({
            user: res,
            isLogin: true,
          });
          return res;
        },
      )
      .catch(
        err => {
          console.log(err);
        },
    );
  }

  login = async (username: string, password: string) => {
    // return userProvider.login(username, password).then(
    return userProvider.mockLogin(username, password).then(
      res => {
        this.setState({
          user: res,
          isLogin: true,
        });
        return res;
      },
    );
  }

  logout = async () => {
    return userProvider.logout()
      .then(
        res =>
          this.setState({
            user: undefined,
            isLogin: false,
          }),
    );

  }

  state = {
    ...defaultValue, ...{
      login: this.login,
      logout: this.logout,
      isLogin: false,
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
