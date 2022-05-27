import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/paginator/Paginator";
import User from "./User";

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, ...props }) => {

   return <div className={s.users}>
      <Paginator totalUsersCount={totalUsersCount}
         pageSize={pageSize}
         currentPage={currentPage}
         onPageChanged={onPageChanged} />

      {users.map(user => <User key={user.id} user={user} follow={follow}
         unfollow={unfollow} followingInProgress={props.followingInProgress} />
      )}
   </div>
}

export default Users;