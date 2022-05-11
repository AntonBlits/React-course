import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";
import authReduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";
import appReduser from "./app-reduser";

let reducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReduser,
   auth: authReduser,
   app: appReduser
})
let store = createStore(reducer, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;