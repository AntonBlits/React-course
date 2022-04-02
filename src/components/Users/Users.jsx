import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
   return <div>
      {props.users.map(u => <div key={u.id} className={s.user}>
         <div className={s.avatar}>
            <div>
               <img src={u.avatar} />
            </div>
            <div>
               {u.followed
                  ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                  : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
         </div>
         <div className={s.info}></div>
      </div>)}
   </div>
}

export default Users;