let initialState = {
   friends: [
      {
         id: 1, name: 'Dimych', avatar: 'https://www.kinogallery.com/pimages/2037/kinogallery.com-2037-472996.jpg'
      },
      { id: 2, name: 'Andrey', avatar: 'https://i.sunhome.ru/people/guestbook/u/34/1039971395.xxl.jpg' },
      { id: 3, name: 'Sveta', avatar: 'https://avatars.mds.yandex.net/i?id=27051c05a006971697aaf1e0ec51220e-5858063-images-thumbs&n=13&exp=1' },
      // { id: 4, name: 'Sasha', avatar: 'https://starnote.ru/media/c/starnote/v3/photos/2017/7/12/b7433f388c/girl-portrait-1.jpg' },
      // { id: 5, name: 'Victor', avatar: 'https://www.kinowar.com/wp-content/uploads/2016/01/Gesichtermix-%D0%A8%D0%BE%D0%BD-%D0%9F%D0%B5%D0%BD%D0%BD-%D0%B8-%D0%94%D0%B8-%D0%9A%D0%B0%D0%BF%D1%80%D0%B8%D0%BE.jpg' },
      // { id: 6, name: 'Valera', avatar: 'https://avatars.mds.yandex.net/get-zen_doc/1658056/pub_6124d8c8ef3b285db33d273e_6124d9d637a42a0d0c300340/scale_1200' },
   ],
}
const sidebarReducer = (state = initialState, action) => {
   return state;
}

export default sidebarReducer;