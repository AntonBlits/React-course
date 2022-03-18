import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
   const activeNavLink = ({ isActive }) => isActive ? s.active : s.item;
   return (<nav className={s.nav}>
      <div>
         <NavLink to='/profile' className={activeNavLink}>Profile</NavLink>
      </div>
      <div>
         <NavLink to='/dialogs' className={activeNavLink}>Messages</NavLink>
      </div>
      <div>
         <NavLink to='/news' className={activeNavLink}>News</NavLink>
      </div>
      <div>
         <NavLink to='/music' className={activeNavLink}>Music</NavLink>
      </div>
      <div>
         <NavLink to='/setting' className={activeNavLink}>Settings</NavLink>
      </div>
   </nav>);
}

export default Navbar;