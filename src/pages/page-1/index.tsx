import React from 'react';
import { Todos } from '../../containers/todos';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PropsType } from '../../reducers/global-state-1';
import { Store, AppAction, ActionNames, actions } from '../../reducers';
import { UserContext } from '../../contexts/user';
import { LoadingContext, LoadingState, withLoadingContext } from '../../contexts/loding';

const Wrapper: React.SFC<PropsType<typeof mstp, typeof mdtp>> = function (props) {
  return (<LoadingContext.Consumer>{({ isShow, show, dissmiss }) => <Page1 {...{ ...props, show, dissmiss, isShow }} />}</LoadingContext.Consumer>);
}


class Page1 extends React.Component<PropsType<typeof mstp, typeof mdtp> & LoadingState> {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ login }) => (
            <>
              <Todos></Todos>
              <button onClick={() => this.props.dispatch({ type: ActionNames.action1 })}>dispatch action1</button>
              <button onClick={() => this.props.dispatch({ type: ActionNames.action2 })}>dispatch action2</button>
              <button onClick={() => login("a", "b")}>切换登陆用户</button>
              <button onClick={() => { this.props.show(); setTimeout(() => this.props.dissmiss(), 2000) }}>3秒加载中...</button>
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
export default connect(mstp, mdtp)(withLoadingContext()(Page1));
