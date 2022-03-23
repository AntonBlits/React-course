import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let Dialogs = (props) => {


   let dialogItem = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
   let messageItem = props.state.messages.map(message => <Message message={message.message} />)

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