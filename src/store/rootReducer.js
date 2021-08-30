import { combineReducers } from 'redux';
import currentUserReducer from './currentUser';
import sidebarReducer from './sidebar';

export const rootReducer = combineReducers({ currentUser: currentUserReducer, sidebarShow: sidebarReducer });
