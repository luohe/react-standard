import React from "react";
import { Todos } from "../../containers/todos";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Store, AppAction, ActionNames } from "../../reducers";
import { UserContext } from "../../contexts/user";
import { LoadingContext, LoadingState } from "../../contexts/loding";
import { withContext } from "../../contexts";
import { PropsType } from "../../reducers/global-state-1";

class Page1 extends React.Component<PropsType<typeof mstp, typeof mdtp> & LoadingState> {
  render() {
    // tslint:disable:jsx-no-multiline-js
    // tslint:disable:jsx-no-lambda
    return (
      <div>
        <UserContext.Consumer>
          {({ login }) => (
            <>
              <Todos/>=
              <button onClick={() => this.props.dispatch({ type: ActionNames.Action1 })}>dispatch action1</button>
              <button onClick={() => this.props.dispatch({ type: ActionNames.Action2 })}>dispatch action2</button>
              <button onClick={() => login("a", "b")}>切换登陆用户</button>
              <button onClick={() => { this.props.show(); setTimeout(() => this.props.dissmiss(), 2000); }}>3秒加载中...</button>
              <div>{this.props.store.globalState1.action}</div>
            </>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

const mstp = (store: Store) => ({ store });
const mdtp = (dispatch: Dispatch<AppAction>) => ({ dispatch });
export default connect(mstp, mdtp)(withContext(LoadingContext)(Page1));
