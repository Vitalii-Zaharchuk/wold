import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';

import Message from './component/Message/Message';

import  UserContainer  from './component/User/UserContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from './component/Header/HeaderContainer';

function App(props) {
  
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderContainer/>
      <div className='info'>
      <Navbar/>
      <Route path='/profile/:userId?' render={() =><ProfileContainer/>}/>
      <Route path ='/message' render={() =><Message />}/>
      <Route path ='/user' render={() =><UserContainer/>}/>
      </div>

    </div>
  </BrowserRouter>  
  );
}

export default App;
