import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
   return (<header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg' />
      <div className={s.loginBlock}>
         {props.isAuth
            ? <div><NavLink to='/profile'>{props.login}</NavLink> <button className={s.btn} onClick={props.logout}>logout</button></div>
            : <NavLink to='/login'>login</NavLink>}

      </div>
   </header>);
}

export default Header;