import React from "react";
import s from "./Users.module.css";
import * as axios from 'axios';
import userphoto from '../../assets/images/noavatar.png';

class Users extends React.Component {
   constructor(props) {
      super(props);
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then((response) => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {
      return <div className={s.users}>
         {this.props.users.map(u => <div key={u.id} className={s.user}>
            <div className={s.avatar}>
               <div>
                  <img src={u.photos.small != null ? u.photos.small : userphoto} />
               </div>
               <div>
                  {u.followed
                     ? <button className={s.btm} onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                     : <button className={s.btm} onClick={() => this.props.follow(u.id)}>Follow</button>}
               </div>
            </div>
            <div className={s.info}>
               <div className={s.fullname}>
                  <div>{u.name}</div>
                  <div className={s.status}>{u.status}</div>
               </div>
               <div className={s.location}>
                  <div>{'u.location.city'}</div>
                  <div>{'u.location.country'}</div>
               </div>
            </div>
         </div>)}
      </div>
   }
}

export default Users;