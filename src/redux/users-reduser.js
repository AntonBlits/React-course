const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: [
      { id: 1, avatar: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg", followed: true, fullname: 'Anton', status: 'I am a boss', location: { city: 'Rostov-na-Donu', country: 'Russia' } },
      { id: 2, avatar: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg", followed: false, fullname: 'Dmitriy', status: 'I am a boss too', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 3, avatar: "https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg", followed: true, fullname: 'Mishel', status: 'I am a boss too', location: { city: 'Paris', country: 'Francia' } },
   ]
}

const usersReduser = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true };
               }
               return u;
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false };
               }
               return u;
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }

      default:
         return state;
   }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReduser;

