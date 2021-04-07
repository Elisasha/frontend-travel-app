import { createStore } from 'redux';
import { authReducer } from './reducers';

export const store = createStore(authReducer);