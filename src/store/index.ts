import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./curUser/reducer";
import { usersReducer } from "./users/reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tripReducer } from "./trips/reducer";
import { sortReducer } from "./sort/reducer";
import { pendingReducer } from "./pending/reducer";

//@ts-ignore
export const store = createStore(
  combineReducers({
    curUser: authReducer,
    users: usersReducer,
    trips: tripReducer,
    sort: sortReducer,
    pending: pendingReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
