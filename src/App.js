import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';



function App(props) {
   return (
      <div className='app-wrapper'>
         <Header />
         <Navbar state={props.state.sidebar} />
         <div className='app-wrapper-content'>
            <Routes>
               <Route path='/profile/*' element={<Profile state={props.state.profilePage} addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText} />} />
               <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} sendMessage={props.sendMessage} updateNewMessageText={props.updateNewMessageText} />} />
               <Route path='/news/*' element={<News />} />
               <Route path='/music/*' element={<Music />} />
               <Route path='/setting/*' element={<Settings />} />
            </Routes>
         </div>
      </div >
   )
}

export default App;
