import { authAPI } from "../api/api";
let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false
}

const authReduser = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      default:
         return state;
   }

}

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });

export const getAuthUserData = () => (dispatch) => {
   authAPI.me().then(data => {
      if (data.resultCode === 0) {
         dispatch(setAuthUserData(data.data))
      }
   })
}

export default authReduser;