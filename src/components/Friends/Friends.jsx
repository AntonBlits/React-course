import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Friends.module.css';

const Friends = (props) => {
   const path = '/friends/' + props.id;
   return (
      <div className={s.friendItem}>
         <img src={props.avatar} />
         <div>
            <NavLink to={path}>{props.name}</NavLink>
         </div>

      </div>
   )
}

export default Friends;