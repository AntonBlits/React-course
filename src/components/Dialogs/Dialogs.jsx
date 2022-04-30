import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { useForm } from 'react-hook-form';

const DialogsForm = (props) => {
   const { register, handleSubmit } = useForm();
   return (
      <form onSubmit={handleSubmit(props.onSubmit)} className={s.addMessages}>
         <div>
            <textarea {...register('newMessageText')} placeholder='Enter your message' />
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}

const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogItem = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
   let messageItem = state.messages.map(message => <Message key={message.id} message={message.message} />);

   let addMessage = (data) => {
      props.onAddMessage(data.newMessageText);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            {dialogItem}
         </div>
         <div className={s.messages}>
            {messageItem}
            <DialogsForm onSubmit={addMessage} />
         </div>
      </div>
   )
}


export default Dialogs;