import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
   { id: 1, name: 'Dimych' },
   { id: 2, name: 'Andrey' },
   { id: 3, name: 'Sveta' },
   { id: 4, name: 'Sasha' },
   { id: 5, name: 'Victor' },
   { id: 6, name: 'Valera' },
]
let messages = [
   { id: 1, message: 'Hi' },
   { id: 2, message: 'How is your IT-kamasutra' },
   { id: 3, message: 'Yo' },
   { id: 4, message: 'Yo' },
   { id: 5, message: 'Kabzda' },
   { id: 6, message: 'React top' },
]
let posts = [
   { id: '1', message: 'Hello, my name is Antony', likesCount: 12 },
   { id: '2', message: 'Hello React developer!', likesCount: 11 },
   { id: '3', message: 'React top!', likesCount: 13 },
]
ReactDOM.render(
   <BrowserRouter>
      <React.StrictMode>
         <App dialogs={dialogs} messages={messages} posts={posts} />
      </React.StrictMode>
   </BrowserRouter>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
