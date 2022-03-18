import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
   return (<nav className={s.nav}>
      <div className={s.item}>
         <Link to='/profile' className={({ navData }) => navData.isActive ? s.active : s.item}>Profile</Link>
      </div>
      <div className={s.item}>
         <Link to='/dialogs'>Messages</Link>
      </div>
      <div className={s.item}>
         <Link to='/news'>News</Link>
      </div>
      <div className={s.item}>
         <Link to='/music'>Music</Link>
      </div>
      <div className={s.item}>
         <Link to='/setting'>Settings</Link>
      </div>
   </nav>);
}

export default Navbar;