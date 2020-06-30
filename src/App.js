import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import { Route, BrowserRouter } from 'react-router-dom';
import Profile from './component/Profile/Profile';
import Message from './component/Message/Message';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className='info'>
      <Navbar/>
      <Route path='/profile' render={() =><Profile/>}/>
      <Route path ='/message' render={() =><Message/>}/>
      </div>

    </div>
  </BrowserRouter>  
  );
}

export default App;
