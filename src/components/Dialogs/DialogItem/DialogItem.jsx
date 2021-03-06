import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = ({ id, name, avatar }) => {
   const path = '/dialogs/' + id;
   return (
      <div className={s.dialog + ' ' + s.active}>
         <img src={avatar} />
         <NavLink to={path}>{name}</NavLink>
      </div>
   )
}

export default DialogItem;