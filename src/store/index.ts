import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './curUser/reducer';
import { usersReducer } from './users/reducer';
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({ curUser: authReducer, users: usersReducer }), applyMiddleware(thunk));