import { ReducersMapObject, Action } from "redux";

export const entry: ReducersMapObject = {
    entry: (state = initState, action: Action<ActionTypes>) => {
        for (let reducerName in reducers) {
            if (reducerName === action.type) {
                return (<ReducersMapObject>reducers)[reducerName](state, action);
            }
        }
        return state;
    }
}

const initState = {

}

const reducers = {
    action1(state: any, action: any) {
        console.log(action, state);
        return state;
    },
    action2(state: any, action: any) {
        console.log(action, state);
        return state;
    }
}



export type ActionTypes = keyof typeof reducers;
