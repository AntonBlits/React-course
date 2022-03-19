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

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <DialogItem name="Dimich" id="1" />
            <DialogItem name="Andrey" id="2" />
            <DialogItem name="Sveta" id="3" />
            <DialogItem name="Sasha" id="4" />
            <DialogItem name="Victor" id="5" />
            <DialogItem name="Valera" id="6" />
         </div>
         <div className={s.messages}>
            <MessageItem message="Hi" />
            <MessageItem message="How is your IT-kamasutra " />
            <MessageItem message="Yo" />
            <MessageItem message="Yo" />
            <MessageItem message="Yo" />
         </div>
      </div>
   )
}


export default Dialogs;