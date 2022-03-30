import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let Dialogs = (props) => {

   let dialogItem = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
   let messageItem = props.dialogsPage.messages.map(message => <Message message={message.message} />);

   let addMessage = () => {
      props.addMessageActionCreate();
   }

   let onMessageChange = (e) => {
      let text = e.target.value;
      props.updateNewMessageTextActionCreate(text);
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
                  <textarea placeholder='Enter your message' onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
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