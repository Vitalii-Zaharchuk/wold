import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { addPost, updateNewPostText,  addDialog, updateNewDialogText, subscribe } from './Redux/state';


export let rerenderEntireTree = (state) =>{
  
    
  ReactDOM.render(
    <React.StrictMode>
      
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
      addDialog={addDialog}
      updateNewDialogText={updateNewDialogText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(state)
serviceWorker.unregister();
subscribe(rerenderEntireTree)

