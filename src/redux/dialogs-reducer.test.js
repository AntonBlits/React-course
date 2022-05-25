import dialogsReducer, { addMessageActionCreate } from "./dialogs-reducer"



it('Checking adding a message', () => {
   let action = addMessageActionCreate();
   let state = {
      messages: [
         { id: 1, message: 'Hello, my name is Antony' },
         { id: 2, message: 'Hello Antony, my name is Margo!' },
         { id: 3, message: 'How are you?' },
         { id: 4, message: 'I am fine, and you?' },
         { id: 5, message: 'Nice!' },
         { id: 6, message: 'React top' },
      ],
   }
   let newState = dialogsReducer(state, action);

   expect(newState.messages.length).toBe(7);
})