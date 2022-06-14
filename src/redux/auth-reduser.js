import { authAPI, securityAPI } from "../api/api";
let SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
let GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/SET_CAPTCHA_SUCCESS';

let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: null,
}

const authReduser = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS:
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   }

}


const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_USER_DATA, payload: {
      userId, email, login, isAuth
   }
});
const getCaptchaUrlSuccess = (captchaUrl) => ({
   type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }
});

export const getAuthUserData = () => async (dispatch) => {
   let data = await authAPI.me();
   if (data.resultCode === 0) {
      let { id, email, login } = data.data;
      dispatch(setAuthUserData(id, email, login, true))
   }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
   let data = await authAPI.login(email, password, rememberMe, captcha);
   if (data.resultCode === 0) {
      dispatch(getAuthUserData())
   } else if (data.resultCode === 10) {
      dispatch(getCaptchaUrl());
   }
}
export const logout = () => async (dispatch) => {
   let data = await authAPI.logout();
   if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}
export const getCaptchaUrl = () => async (dispatch) => {
   let data = await securityAPI.getCaptchaUrl();
   let captchaUrl = data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}


export default authReduser;