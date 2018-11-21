import { createStore, combineReducers } from 'redux';
import { entry } from './reducers/page-1';
export const store = createStore(
    combineReducers(entry)
);