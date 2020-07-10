import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import StoreContext from './StoreContext';


export let rerenderEntireTree = (state) =>{
  
    
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
      
      <App />
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
serviceWorker.unregister();
store.subscribe(() =>{
  let state = store.getState();
  rerenderEntireTree(state)
})

