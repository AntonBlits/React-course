import { profileAPI } from "../api/api";
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   posts: [
      { id: '1', message: 'Hello, my name is Antony', likesCount: 12 },
      { id: '2', message: 'Hello React developer!', likesCount: 11 },
      { id: '3', message: 'React top!', likesCount: 13 },
      { id: '4', message: 'IT-samurai!', likesCount: 1 },
   ],
   profile: null,
   status: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         };
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      case SET_STATUS:
         return { ...state, status: action.status }

      default:
         return state;

   }
}

export const addPostActionCreate = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });


export const getUserProfile = (userId) => {
   return (dispatch) => {
      profileAPI.getProfile(userId).then((data) => dispatch(setUserProfile(data)));
   }
}
export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId).then((data) => dispatch(setStatus(data)));
}

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).
      then((data) => {
         if (data.resultCode === 0) {
            dispatch(setStatus(status));
         }
      })
}

export default profileReducer; 