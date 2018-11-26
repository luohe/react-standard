import { createStore, combineReducers, ReducersMapObject, Action } from 'redux';
import { rootReducer } from './reducers';

export const store = createStore(
    combineReducers(rootReducer)
);