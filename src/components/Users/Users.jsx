import React from "react";
import s from "./Users.module.css";
import userphoto from '../../assets/images/noavatar.png';
import *as axios from 'axios';
import { NavLink } from "react-router-dom";

const Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   return <div className={s.users}>
      <div className={s.page}>
         {pages.map(p => <span className={props.currentPage === p ? s.selectedPage : null}
            onClick={() => props.onPageChanged(p)}>{p}</span>)}
      </div>
      {props.users.map(u => <div key={u.id} className={s.user}>
         <div className={s.avatar}>
            <div>
               <NavLink to={'/profile/' + u.id} >
                  <img src={u.photos.small != null ? u.photos.small : userphoto} />
               </NavLink>
            </div>
            <div>
               {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btm} onClick={() => {
                     props.toggleFollowingProgress(true, u.id);
                     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {
                           withCredentials: true,
                           headers: {
                              'API-KEY': 'd46ccef0-1611-4167-a06a-3b89053f0b0e'
                           }
                        }
                     )
                        .then((response) => {
                           if (response.data.resultCode === 0) {
                              props.unfollow(u.id)
                           }
                           props.toggleFollowingProgress(false, u.id);

                        });
                  }
                  }>Unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.btm} onClick={() => {
                     props.toggleFollowingProgress(true, u.id);
                     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                        {
                           withCredentials: true,
                           headers: {
                              'API-KEY': 'd46ccef0-1611-4167-a06a-3b89053f0b0e'
                           }
                        }
                     )
                        .then((response) => {
                           if (response.data.resultCode === 0) {
                              props.follow(u.id)
                           }
                           props.toggleFollowingProgress(false, u.id);
                        });
                  }
                  }>Follow</button>}
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

export default Users;