const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
   posts: [
      { id: '1', message: 'Hello, my name is Antony', likesCount: 12 },
      { id: '2', message: 'Hello React developer!', likesCount: 11 },
      { id: '3', message: 'React top!', likesCount: 13 },
   ],
   newPostText: 'IT-kamasutra!!!',
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: 0,
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state;

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;

      default:
         return state;
   }
}

export const addPostActionCreate = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreate = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer; 