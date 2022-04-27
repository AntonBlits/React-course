import { profileAPI } from "../api/api";
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
   posts: [
      { id: '1', message: 'Hello, my name is Antony', likesCount: 12 },
      { id: '2', message: 'Hello React developer!', likesCount: 11 },
      { id: '3', message: 'React top!', likesCount: 13 },
      { id: '4', message: 'IT-samurai!', likesCount: 1 },
   ],
   newPostText: 'IT-kamasutra!!!',
   profile: null,
   status: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
         };

      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText,
         }
      case SET_USER_PROFILE:
         return { ...state, profile: action.profile }
      case SET_STATUS:
         return { ...state, status: action.status }

      default:
         return state;

   }
}

export const addPostActionCreate = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
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