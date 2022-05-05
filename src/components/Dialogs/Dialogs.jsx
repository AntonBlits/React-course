import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { useForm } from 'react-hook-form';

const DialogsForm = (props) => {
   const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
   return (
      <form onSubmit={handleSubmit(props.onSubmit)} className={s.addMessages} >
         <div>
            <textarea className={errors.newMessageText && s.error} {...register("newMessageText", { required: true, maxLength: 10 })} />
            {errors.newMessageText?.type === "required" && <div style={{ color: 'red' }}>
               Your textarea is required</div>}
            {errors.newMessageText?.type === "maxLength" && <div style={{ color: 'red' }}>
               Your textarea exceed maxLength</div>}
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