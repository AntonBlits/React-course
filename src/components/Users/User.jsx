import React from "react";
import s from "./Users.module.css";
import userphoto from '../../assets/images/noavatar.png';
import { NavLink } from "react-router-dom";

const User = ({ follow, unfollow, followingInProgress, user }) => {

   return <div className={s.user}>
      <div className={s.avatar}>
         <div>
            <NavLink to={'/profile/' + user.id} >
               <img src={user.photos.small != null ? user.photos.small : userphoto} />
            </NavLink>
         </div>
         <div>
            {user.followed
               ? <button disabled={followingInProgress
                  .some(id => id === user.id)} className={s.btm}
                  onClick={() => { unfollow(user.id) }
                  }>Unfollow</button>
               : <button disabled={followingInProgress
                  .some(id => id === user.id)} className={s.btm}
                  onClick={() => { follow(user.id) }
                  }>Follow</button>}
         </div>
      </div>
      <div className={s.info}>
         <div className={s.fullname}>
            <div>{user.name}</div>
            <div className={s.status}>{user.status}</div>
         </div>
         <div className={s.location}>
            <div>{'user.location.city'}</div>
            <div>{'user.location.country'}</div>
         </div>
      </div>
   </div>
}

export default User;