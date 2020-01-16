import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { connect } from "react-redux";
import setAuthToken from './utils/setAuthToken'
import { loginSuccess }from './redux/actions/actions'
import './App.css';
import Home from './components/Home/Home';
// import Activities from './components/Activities';
// import Objectives from './components/Objectives';
// import Obituaries from './components/Obituaries';
// import Gallery from './components/Gallery';
// import Board from './components/Board';
// import Content from './components/Content/Content';
import Forms from './components/Forms/Forms';
import DashBoard from './components/Dashboard';
import Login from './components/Login';
import Feeds from './components/Forms/Feeds';
import Management from './components/Dashboard/Management';
import Analytics from './components/Dashboard/Analytics';
import Register from './components/Regisiter';
import FeedDashBoardStory from './components/Dashboard/DashBoardStory';
import Ads from './components/Forms/Ads';
import reactPortal from './components/reactPortal';

const localStorageData = localStorage.jwtToken

class App extends Component {

setCurrentUser = localStorageData =>{
//Check for token 
if(localStorageData) {
  //set auth token header auth
  setAuthToken(localStorageData)
  //decode token and get user info
  const decode =  jwt_decode(localStorageData);
  //set user and isAuthenticated
  this.props.loginSuccess(decode)
} 
}
  render(){
    this.setCurrentUser(localStorageData)
    return (
      <Router>
        <Switch>
          {/* <Route exact path='/' component = {Home} /> */}
          {/* <Route exact path='/activities' component={Activities}/>
          <Route exact path='/objectives' component={Objectives}/>
          <Route exact path='/obituaries' component={Obituaries}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/board' component={Board}/>
          <Route exact path='/content/:id' component={Content}/> */}
          <Route exact path='/forms' component={Forms}/>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/analytics' component={Analytics}/>
          <Route path='/dashboard' component={DashBoard}/>
          <Route path='/management' component={Management}/>
          <Route path='/register' component={Register}/>
          <Route path='/feed' component={Feeds}/>
          <Route path='/story' component={FeedDashBoardStory}/>
          <Route path='/ads' component={Ads}/>
          <Route path='/reactportal' component={reactPortal}/>
          {/* <Route componet={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}
const mapDispatchToProps = {
  loginSuccess
};

export default connect(null, mapDispatchToProps)(App);
