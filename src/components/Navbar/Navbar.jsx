import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from '../Friends/Friends';

const Navbar = (props) => {

   let friendsItem = props.sidebar.friends.map(friend => <Friends key={friend.id} id={friend.id} name={friend.name} avatar={friend.avatar} />)

   const activeNavLink = ({ isActive }) => isActive ? s.active : s.item;
   return (<nav className={s.nav}>
      <div >
         <NavLink to='/profile' className={activeNavLink}>Profile</NavLink>
      </div>
      <div >
         <NavLink to='/dialogs' className={activeNavLink}>Messages</NavLink>
      </div>
      <div >
         <NavLink to='/news' className={activeNavLink}>News</NavLink>
      </div>
      <div >
         <NavLink to='/music' className={activeNavLink}>Music</NavLink>
      </div>
      <div className={s.setting}>
         <NavLink to='/setting' className={activeNavLink}>Settings</NavLink>
      </div>
      <div className={s.friends}>
         <NavLink to='/friends' className={activeNavLink}>Friends</NavLink>
         <div className={s.friendsLink}>
            {friendsItem}
         </div>
      </div>
   </nav>);
}

export default Navbar;