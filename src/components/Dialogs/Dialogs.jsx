import React, { useEffect } from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { useForm } from 'react-hook-form';

const DialogsForm = ({ onSubmit }) => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'all' });

   useEffect(() => {
      reset()
   }, [onSubmit]);

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={s.addMessages} >
         <div>
            <textarea placeholder='Enter message' className={errors.newMessageText && s.error} {...register("newMessageText", {
               required: 'Your textarea is required',
               maxLength: {
                  value: 10,
                  message: 'Your textarea exceed maxLength 10'
               }
            })} />
            {errors?.newMessageText && <div style={{ color: 'red' }}>{errors.newMessageText?.message}</div>}
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}

const Dialogs = ({ dialogsPage, onAddMessage }) => {

   let state = dialogsPage;

   let dialogItem = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />);
   let messageItem = state.messages.map(message => <Message key={message.id} message={message.message} />);

   let addMessage = (data) => {
      onAddMessage(data.newMessageText);
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