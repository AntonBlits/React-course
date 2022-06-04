import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import Preloader from './components/common/preloader/Preloader';
import { initializeApp } from './redux/app-reduser';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
            <Suspense fallback={<Preloader />}>
               <Routes>
                  <Route path='/profile/:userId' element={<ProfileContainer />} />
                  <Route path='/profile/' element={<ProfileContainer />} />
                  <Route path='/dialogs/' element={<DialogsContainer />} />
                  <Route path='/news/' element={<News />} />
                  <Route path='/music/' element={<Music />} />
                  <Route path='/users/' element={<UsersContainer />} />
                  <Route path='/setting/' element={<Settings />} />
                  <Route path='/login/' element={<Login />} />
                  <Route path='/' element={<Login />} />
               </Routes>
            </Suspense>
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
