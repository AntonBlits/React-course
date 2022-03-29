const ADD_MESSAGE = 'ADD_MESSAGEADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
   dialogs: [
      {
         id: 1, name: 'Dimych', avatar: 'https://www.kinogallery.com/pimages/2037/kinogallery.com-2037-472996.jpg'
      },
      { id: 2, name: 'Andrey', avatar: 'https://i.sunhome.ru/people/guestbook/u/34/1039971395.xxl.jpg' },
      { id: 3, name: 'Sveta', avatar: 'https://avatars.mds.yandex.net/i?id=27051c05a006971697aaf1e0ec51220e-5858063-images-thumbs&n=13&exp=1' },
      { id: 4, name: 'Sasha', avatar: 'https://starnote.ru/media/c/starnote/v3/photos/2017/7/12/b7433f388c/girl-portrait-1.jpg' },
      { id: 5, name: 'Victor', avatar: 'https://www.kinowar.com/wp-content/uploads/2016/01/Gesichtermix-%D0%A8%D0%BE%D0%BD-%D0%9F%D0%B5%D0%BD%D0%BD-%D0%B8-%D0%94%D0%B8-%D0%9A%D0%B0%D0%BF%D1%80%D0%B8%D0%BE.jpg' },
      { id: 6, name: 'Valera', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1658056/pub_6124d8c8ef3b285db33d273e_6124d9d637a42a0d0c300340/scale_1200' },
   ],

   messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your IT-kamasutra' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Kabzda' },
      { id: 6, message: 'React top' },
   ],
   newMessageText: 'Hello world!',
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 5,
            message: state.newMessageText,
         }
         state.messages.push(newMessage);
         state.newMessageText = '';
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
