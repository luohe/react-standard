import { Action, ReducersMapObject } from "redux";
import { ActionTypes, ActionNames } from ".";




const initState = {
    /** 动作类型 */
    action: "no action"
}

export function globalState1(state = initState, action: Action<ActionTypes>): State {
    const type: ActionTypes = action.type;
    switch (type) {
        case ActionNames.action1: {
            return { ...state, action: action.type };
        }
        case ActionNames.action2: {
            return { ...state, action: action.type };
        }
        default: {
            return state;
        }
    }

    // if ("action1" === type) {
    //     return { ...state, action: action.type };
    // } else if ("action2" === type) {
    //     return { ...state, action: action.type };
    // } else if ("action2" === type) {
    //     return { ...state, action: action.type };
    // }
    // return state;

    // for (const reducerName in reducers) {
    //     if (reducerName) {
    //         return reducers[reducerName](state, action);
    //     }
    // }
}

export type State = typeof initState;

export type PropsType<T extends (...args: any[]) => any, D extends (...args: any[]) => any> = ReturnType<T> & ReturnType<D>;
