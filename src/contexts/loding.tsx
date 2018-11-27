import React from 'react';
import { withContext } from '.';

const value = {
    isShow: false,
    show: function () { },
    dissmiss: function () { }
}

export type LoadingState = typeof value;

export const LoadingContext = React.createContext(value);

export class LoadingContextDefaultProvider extends React.Component<{}, LoadingState, {}>{
    show = () => {
        if (this.state.isShow === false) {
            this.setState({
                isShow: true
            });
        }
    }

    dissmiss = () => {
        if (this.state.isShow === true) {
            this.setState({
                isShow: false
            });
        }
    }

    state = {
        ...value, ...{
            show: this.show,
            dissmiss: this.dissmiss
        }
    };

    render() {
        return (
            <LoadingContext.Provider value={this.state} >
                {this.props.children}
            </LoadingContext.Provider>
        );
    }
}
