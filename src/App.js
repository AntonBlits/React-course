import React, { useEffect } from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
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
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import { initializeApp } from './redux/app-reduser';

const App = (props) => {
   useEffect(() => {
      props.initializeApp();
   }, []);

   if (!props.initialized) {
      return <Preloader />
   }
   return (
      <div className='app-wrapper'>
         <HeaderContainer />
         <NavbarContainer />
         <div className='app-wrapper-content'>
            {/* <Switch>
               <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
               <Route path='/dialogs/' render={() => <DialogsContainer />} />
               <Route path='/news/' render={() => <News />} />
               <Route path='/music/' render={() => <Music />} />
               <Route path='/users/' render={() => <UsersContainer />} />
               <Route path='/setting/' render={() => <Settings />} />
               <Route path='/login/' render={() => <Login />} />
            </Switch> */}
            <Routes>
               <Route path='/profile/:userId' element={<ProfileContainer />} />
               <Route path='/dialogs/' element={<DialogsContainer />} />
               <Route path='/news/' element={<News />} />
               <Route path='/music/' element={<Music />} />
               <Route path='/users/' element={<UsersContainer />} />
               <Route path='/setting/' element={<Settings />} />
               <Route path='/login/' element={<Login />} />
               <Route path='/' element={<Login />} />
            </Routes>
         </div>
      </div >
   )
}

const mapStateToProps = (state) => {
   return {
      initialized: state.app.initialized,

   }
}

export default connect(mapStateToProps, { initializeApp })(App);
