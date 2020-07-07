import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost, updateNewPostText } from './Redux/state';

export let rerenderEntireTree = (state) =>{
    debugger
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

serviceWorker.unregister();



