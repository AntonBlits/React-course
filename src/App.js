import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/login/Login';

function App() {
   return (
      <div className='app-wrapper'>
         <HeaderContainer />
         <NavbarContainer />
         <div className='app-wrapper-content'>
            <Switch>
               <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
               <Route path='/dialogs/' render={() => <DialogsContainer />} />
               <Route path='/news/' render={() => <News />} />
               <Route path='/music/' render={() => <Music />} />
               <Route path='/users/' render={() => <UsersContainer />} />
               <Route path='/setting/' render={() => <Settings />} />
               <Route path='/login/' render={() => <Login />} />
            </Switch>
         </div>
      </div >
   )
}

export default App;
