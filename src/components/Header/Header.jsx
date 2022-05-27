import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = ({ login, logout, isAuth }) => {
   return (<header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg' />
      <div className={s.loginBlock}>
         {isAuth
            ? <div><NavLink to='/profile'>{login}</NavLink> <button className={s.btn} onClick={logout}>logout</button></div>
            : <NavLink to='/login'>login</NavLink>}

      </div>
   </header>);
}

export default Header;