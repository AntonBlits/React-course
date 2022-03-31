import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import NavbarContainer from './components/Navbar/NavbarContainer';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App() {
   return (
      <div className='app-wrapper'>
         <Header />
         <NavbarContainer />
         <div className='app-wrapper-content'>
            <Routes>
               <Route path='/profile/*' element={<Profile />} />
               <Route path='/dialogs/*' element={<DialogsContainer />} />
               <Route path='/news/*' element={<News />} />
               <Route path='/music/*' element={<Music />} />
               <Route path='/setting/*' element={<Settings />} />
            </Routes>
         </div>
      </div >
   )
}

export default App;
