import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogItem = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
   let messageItem = state.messages.map(message => <Message key={message.id} message={message.message} />);
   let newMessageItem = state.newMessageText;

   let addMessage = () => {
      props.onAddMessage();
   }

   let onMessageChange = (e) => {
      let text = e.target.value;
      props.updateMessageChange(text);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogItem}
         </div>
         <div className={s.messages}>
            {messageItem}
            <div className={s.addMessages}>
               <div>
                  <textarea placeholder='Enter your message' onChange={onMessageChange} value={newMessageItem} />
               </div>
               <div>
                  <button onClick={addMessage}>Send</button>
               </div>
            </div>
         </div>
      </div>
   )
}


export default Dialogs;