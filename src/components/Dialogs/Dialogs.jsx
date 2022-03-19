import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
   const path = '/dialogs/' + props.id;
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const MessageItem = (props) => {
   return <div className={s.mesage}>{props.message}</div>
}

let Dialogs = () => {
   let dialogsData = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' },
   ]
   let messageData = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your IT-kamasutra' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'Yo' },
   ]
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
         </div>
         <div className={s.messages}>
            <MessageItem message={messageData[0].message} />
            <MessageItem message={messageData[1].message} />
            <MessageItem message={messageData[2].message} />
            <MessageItem message={messageData[3].message} />
         </div>
      </div>
   )
}


export default Dialogs;