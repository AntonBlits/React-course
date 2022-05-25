import profileReducer, { addPostActionCreate } from "./profile-reducer";


it('Checking adding a post', () => {
   let action = addPostActionCreate("it-kamasutra");
   let state = {
      posts: [
         { id: '1', message: 'I React developer!', likesCount: 12 },
         { id: '2', message: 'JavaScript', likesCount: 11 },
         { id: '3', message: 'HTML', likesCount: 13 },
         { id: '4', message: 'CSS', likesCount: 1 },
      ]
   }

   let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(5);
});
