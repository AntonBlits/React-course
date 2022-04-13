import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
   return (<header className={s.header}>
      <img src='https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg' />
      <div className={s.loginBlock}>
         {props.isAuth
            ? <NavLink to='/profile'>{props.login}</NavLink>
            : <NavLink to='/auth/me'>login</NavLink>}

      </div>
   </header>);
}

export default Header;