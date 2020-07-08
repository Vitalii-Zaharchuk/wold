import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state';


export let rerenderEntireTree = (state) =>{
  
    
  ReactDOM.render(
    <React.StrictMode>
      
      <App store={store}  dispatch={store.dispatch.bind(store)} 
      
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
serviceWorker.unregister();
store.subscribe(rerenderEntireTree)

