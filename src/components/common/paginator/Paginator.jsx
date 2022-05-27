import React from 'react';
import s from "./Paginator.module.css";


const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {

   let pagesCount = Math.ceil(totalUsersCount / pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return <div className={s.page}>
      {pages.map(p => <span key={Math.random()} className={currentPage === p ? s.selectedPage : null}
         onClick={() => onPageChanged(p)}>{p}</span>)}
   </div>
}

export default Paginator;
