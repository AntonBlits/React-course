import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const DialogItem = (props) => {
   const path = '/dialogs/' + props.id;
   return (
      <div className={s.dialog + ' ' + s.active}>
         <img src={props.avatar} />
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

export default DialogItem;