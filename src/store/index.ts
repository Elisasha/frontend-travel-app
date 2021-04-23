import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './curUser/reducer';
import { usersReducer } from './users/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tripReducer } from './trips/reducer';

//@ts-ignore
export const store = createStore(combineReducers({ curUser: authReducer, users: usersReducer, trips: tripReducer }), composeWithDevTools(applyMiddleware(thunk)));