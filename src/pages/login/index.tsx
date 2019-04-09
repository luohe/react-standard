import React from "react";
import { UserState, UserContext } from "../../contexts/user";
import { withContext } from "../../contexts";

/** 默认state */
const defaultState = {
  /** 用户名 */
  username: "admin",
  /** 密码 */
  password: "123456",
};

/**
 * 登陆页
 *
 * @author 张卓诚
 * @date 2018-12-24
 * @class Page1
 * @extends {(React.PureComponent<PropsType<typeof mstp, typeof mdtp> & LoadingState & CropState>)}
 */
class Login extends React.PureComponent<UserState, typeof defaultState> {

  updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        username: event.target.value,
      },
    );
  }

  updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        password: event.target.value,
      },
    );
  }

  state = defaultState;

  render() {
    // tslint:disable:jsx-no-multiline-js
    // tslint:disable:jsx-no-lambda

    return (
      <div>
        用户名：<input onChange={this.updateUsername} defaultValue="admin"/>
        密码：<input onChange={this.updatePassword} defaultValue="123456"/>
        <button onClick={() => this.props.login(this.state.username, this.state.password)}>登陆</button>
      </div>
    );
  }
}
export default withContext(UserContext)(Login);
