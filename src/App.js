import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './component/Navbar/Navbar';
import { Route,  withRouter } from 'react-router-dom';

import Message from './component/Message/Message';

import  UserContainer  from './component/User/UserContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Login from './component/Login/Login';
import { connect } from 'react-redux';
import { authMeThunk } from './Redux/auth-reducer';
import { compose } from 'redux';
import { initializedAPPThunk } from './Redux/app-reducer';
import Prelolder from './component/common/Prelolder/Prelolder';


class App extends React.Component{
  componentDidMount() {
    this.props.initializedAPPThunk()
   

}
  render(){
    if(!this.props.initialized){
      return <Prelolder/>
    }
    return (
      
      <div className="App">
        <HeaderContainer/>
        <div className='info'>
        <Navbar/>
        <Route path='/profile/:userId?' render={() =><ProfileContainer/>}/>
        <Route path ='/message' render={() =><Message />}/>
        <Route path ='/user' render={() =><UserContainer/>}/>
        <Route path='/login' render={()=><Login/>}/>
        </div>
  
      </div>
     
    );
  }
}
let mapStateToProps = (state) =>{
  return{
    initialized:state.appPage.initialized
  }
}
export default compose(
  withRouter,
  connect(mapStateToProps ,{initializedAPPThunk})
  
)
(App)

