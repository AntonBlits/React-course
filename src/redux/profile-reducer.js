import { profileAPI } from "../api/api";
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
   posts: [
      { id: '1', message: 'I React developer!', likesCount: 12 },
      { id: '2', message: 'JavaScript', likesCount: 11 },
      { id: '3', message: 'HTML', likesCount: 13 },
      { id: '4', message: 'CSS', likesCount: 1 },
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
      case SAVE_PHOTO_SUCCESS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
         }

      default:
         return state;

   }
}

export const addPostActionCreate = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })


export const getUserProfile = (userId) => async (dispatch) => {
   let data = await profileAPI.getProfile(userId);
   dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
   let data = await profileAPI.getStatus(userId);
   dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
   let data = await profileAPI.updateStatus(status);
   if (data.resultCode === 0) {
      dispatch(setStatus(status));
   }
}
export const savePhoto = (file) => async (dispatch) => {
   let data = await profileAPI.updateMainPhoto(file);
   if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos));
   }
}

export default profileReducer; 