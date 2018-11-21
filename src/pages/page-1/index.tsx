import React, { Component } from 'react';
import { Todos } from '../../components/todos';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ActionTypes } from '../../reducers/page-1';


class Page1 extends Component<{ dispatch: Dispatch<{ type: ActionTypes }> }> {
  render() {
    console.log(this.props);
    return (
      <div>
        <Todos></Todos>
        <button onClick={() => this.props.dispatch({ type: "action1" })}>send action1</button>
        <button onClick={() => this.props.dispatch({ type: "action2" })}>send action2</button>
      </div>
    );
  }
}

export default connect(state => ({ state }), dispatch => ({ dispatch }))(Page1);
