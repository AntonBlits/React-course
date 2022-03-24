import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import state, { addPost, updateNewPostText, sendMessage, updateNewMessageText, subscribe } from './redux/state';

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
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
