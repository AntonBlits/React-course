import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
   return <div>
      <h2 className={s.h2}>Users</h2>
      <div className={s.users}>
         {props.users.map(u => <div key={u.id} className={s.user}>
            <div className={s.avatar}>
               <div>
                  <img src={u.avatar} />
               </div>
               <div>
                  {u.followed
                     ? <button className={s.btm} onClick={() => props.unfollow(u.id)}>Unfollow</button>
                     : <button className={s.btm} onClick={() => props.follow(u.id)}>Follow</button>}
               </div>
            </div>
            <div className={s.info}>
               <div className={s.fullname}>
                  <div>{u.fullname}</div>
                  <div className={s.status}>{u.status}</div>
               </div>
               <div className={s.location}>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>

               </div>
            </div>
         </div>)}
      </div>
   </div>
}

export default Users;