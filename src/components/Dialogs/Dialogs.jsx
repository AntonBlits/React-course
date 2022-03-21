import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

let Dialogs = () => {
   let dialogs = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' },
   ]
   let messages = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your IT-kamasutra' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
      { id: 5, message: 'Kabzda' },
      { id: 6, message: 'React top' },
   ]

   let dialogItem = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
   let messageItem = messages.map(message => <Message message={message.message} />)

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