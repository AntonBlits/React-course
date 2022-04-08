import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

function App() {
   return (
      <div className='app-wrapper'>
         <Header />
         <NavbarContainer />
         <div className='app-wrapper-content'>
            <Switch>
               <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
               <Route path='/dialogs/' render={() => <DialogsContainer />} />
               <Route path='/news/' render={() => <News />} />
               <Route path='/music/' render={() => <Music />} />
               <Route path='/users/' render={() => <UsersContainer />} />
               <Route path='/setting/' render={() => <Settings />} />
            </Switch>
         </div>
      </div >
   )
}

export default App;
