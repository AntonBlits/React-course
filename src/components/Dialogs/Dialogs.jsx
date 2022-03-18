import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <div className={s.dialog}>Dimich</div>
            <div className={s.dialog}>Andrey</div>
            <div className={s.dialog}>Sveta</div>
            <div className={s.dialog}>Sasha</div>
            <div className={s.dialog}>Victor</div>
            <div className={s.dialog}>Valera</div>
         </div>
         <div className={s.messages}>
            <div className={s.mesage}>Hi</div>
            <div className={s.mesage}>How is your IT-kamasutra </div>
            <div className={s.mesage}>Yo</div>
         </div>
      </div>
   )
}


export default Dialogs;