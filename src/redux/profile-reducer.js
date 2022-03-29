const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: 0,
         };
         state.posts.push(newPost);
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