import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, sendMessage, updateNewMessageText } from './redux/state';

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText} />
         </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
   );
}


