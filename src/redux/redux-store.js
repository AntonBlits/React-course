import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReduser from "./users-reduser";

let reducer = combineReducers({
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   sidebar: sidebarReducer,
   usersPage: usersReduser
})
let store = createStore(reducer);


export default store;