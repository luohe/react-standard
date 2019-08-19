import { globalState1, State } from "./global-state-1";
import { Action } from "redux";
export type ValueOf<T> = T[keyof T];
/** 所有的动作 */
export enum ActionNames {
  /** action1 */
  Action1 = "1",
  /** action2 */
  Action2 = "2",
}

/** ActionTypes */
export type ActionTypes = ValueOf<typeof ActionNames>;

export type AppAction = Action<ActionTypes>;
export const rootReducer = { globalState1 };
export interface Store {
  globalState1: State;
}

