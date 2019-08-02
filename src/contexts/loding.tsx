import React from "react";

const value = {
  isShow: false,
  show() { },
  dissmiss() { },
};

export type LoadingState = typeof value;

// tslint:disable-next-line:variable-name
export const LoadingContext = React.createContext(value);

/**
 * 加载状态context
 *
 * @author 张卓诚
 * @export
 * @class LoadingContextDefaultProvider
 * @extends {React.Component<{}, LoadingState, {}>}
 */
export class LoadingContextDefaultProvider extends React.Component<{}, LoadingState, {}> {
  /**
   * 显示
   *
   * @memberof LoadingContextDefaultProvider
   */
  show = () => {
    if (this.state.isShow === false) {
      this.setState({
        isShow: true,
      });
    }
  }

  /**
   * 隐藏
   *
   * @memberof LoadingContextDefaultProvider
   */
  dissmiss = () => {
    if (this.state.isShow === true) {
      this.setState({
        isShow: false,
      });
    }
  }

  state = {
    ...value, ...{
      show: this.show,
      dissmiss: this.dissmiss,
    },
  };

  render() {
    return (
            <LoadingContext.Provider value={this.state} >
                {this.props.children}
            </LoadingContext.Provider>
    );
  }
}
