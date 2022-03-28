import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { addMessageActionCreate, updateNewMessageTextActionCreate } from '../../redux/state';

let Dialogs = (props) => {


   let dialogItem = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
   let messageItem = props.state.messages.map(message => <Message message={message.message} />);

   let newMessage = React.createRef();

   let addMessage = () => {
      props.dispatch(addMessageActionCreate());
      props.dispatch(updateNewMessageTextActionCreate(''));
   }

   let onMessageChange = () => {
      let text = newMessage.current.value;
      props.dispatch(updateNewMessageTextActionCreate(text));
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
                  <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText} />
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