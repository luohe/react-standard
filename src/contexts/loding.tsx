import React from "react";

const value = {
  isShow: false,
  show() { },
  dissmiss() { },
};

export type LoadingState = typeof value;

// tslint:disable-next-line:variable-name
export const LoadingContext = React.createContext(value);

export class LoadingContextDefaultProvider extends React.Component<{}, LoadingState, {}> {
  show = () => {
    if (this.state.isShow === false) {
      this.setState({
        isShow: true,
      });
    }
  }

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
