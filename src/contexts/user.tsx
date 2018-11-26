import React from 'react';
import { User } from '../models/user';
import { Omit, withContext } from '.';

let count = 0;
const value = {
    user: { name: (count++).toString() },
    login: async function (username: string, password: string) { return {} as User }
}
export const UserContext = React.createContext(value);

type UserState = typeof value;

/** 添加User到props中
 * @author James Zhang
 */
export const withUserContext = function(){
    return withContext(UserContext);
}

export class UserContextDefaultProvider extends React.Component<{}, UserState, {}>{
    login = async (username: string, password: string) => {
        let user = { name: (count++).toString() } as User;
        this.setState({
            user: user
        });
        return user;
    }

    state = {
        ...value, ...{
            login: this.login
        }
    };

    render() {
        return (
            <UserContext.Provider value={this.state} >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
