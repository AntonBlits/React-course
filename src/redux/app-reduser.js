import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth-reduser";
let INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
   initialized: false
}

const appReduser = (state = initialState, action) => {
   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true
         }
      default:
         return state;
   }

}

export const initializedSucces = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserData());

   promise.then(() => {
      dispatch(initializedSucces());
   })
}


export default appReduser;