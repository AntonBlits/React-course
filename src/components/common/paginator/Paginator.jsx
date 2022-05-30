import React, { useState } from 'react';
import s from "./Paginator.module.css";


const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 30 }) => {

   let pagesCount = Math.ceil(totalUsersCount / pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   let portionCount = Math.ceil(pagesCount / portionSize);
   const [portionNumber, setPortionNumber] = useState(1);
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
   let rightPortionPageNumber = portionNumber * portionSize;


   return <div className={s.page}>
      {portionNumber > 1 &&
         <button className={s.btn} onClick={() => setPortionNumber(portionNumber - 1)}>&#9668;</button>}

      {pages
         .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
         .map(p => <span key={Math.random()} className={currentPage === p ? s.selectedPage : null}
            onClick={() => onPageChanged(p)}>{p}</span>)}

      {portionCount > portionNumber &&
         <button className={s.btn} onClick={() => setPortionNumber(portionNumber + 1)}>&#9658;</button>}

   </div>
}

export default Paginator;
