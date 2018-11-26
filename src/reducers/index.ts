import { globalState1, State } from "./global-state-1";
import { Action } from "redux";
import * as actions2 from "./actions";
export const actions = actions2;
export type ValueOf<T> = T[keyof T];
/** ActionTypes */
export type ActionTypes = ValueOf<typeof ActionNames>;
// export type ActionTypes =  ValueOf<typeof actions>

export type AppAction = Action<ActionTypes>
export const rootReducer = { globalState1 };
export interface Store {
    globalState1: State;
};

/** 所有的动作 */
export enum ActionNames {
    /** action1 */
    action1 = "1",
    /** action2 */
    action2 = "2"
};