const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: [
      { id: 1, followed: true, fullname: 'Anton', status: 'I am a boss', location: { city: 'Rostov-na-Donu', country: 'Russia' } },
      { id: 2, followed: false, fullname: 'Dmitriy', status: 'I am a boss too', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 3, followed: true, fullname: 'Mishel', status: 'I am a boss too', location: { city: 'Paris', country: 'Francia' } },
   ]
}

const usersReduser = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: [...state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, fallwed: true };
               }
               return u;
            })
            ]
         }
      case UNFOLLOW:
         return {
            ...state,
            users: [...state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false };
               }
               return u;
            })
            ]
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

