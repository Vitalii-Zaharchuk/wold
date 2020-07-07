import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state';


export let rerenderEntireTree = (state) =>{
  
    
  ReactDOM.render(
    <React.StrictMode>
      
      <App store={store} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}
      addDialog={store.addDialog.bind(store)}
      updateNewDialogText={store.updateNewDialogText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
serviceWorker.unregister();
store.subscribe(rerenderEntireTree)

