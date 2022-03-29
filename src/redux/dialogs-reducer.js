const ADD_MESSAGE = 'ADD_MESSAGEADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 5,
            message: state.newMessageText,
         }
         state.messages.push(newMessage);
         return state;
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newMessage;
         return state;
      default:
         return state;
   }
}

export const addMessageActionCreate = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreate = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

export default dialogsReducer;
