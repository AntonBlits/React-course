import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let Dialogs = (props) => {


   let dialogItem = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
   let messageItem = props.messages.map(message => <Message message={message.message} />)

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogItem}
         </div>
         <div className={s.messages}>
            {messageItem}
         </div>
      </div>
   )
}


export default Dialogs;