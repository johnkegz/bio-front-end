import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Activities from './components/Activities';
import Objectives from './components/Objectives';
import Obituaries from './components/Obituaries';
import Gallery from './components/Gallery';
import Board from './components/Board';

class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component = {Main} />
          <Route exact path='/activities' component={Activities}/>
          <Route exact path='/objectives' component={Objectives}/>
          <Route exact path='/obituaries' component={Obituaries}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/board' component={Board}/>
          {/* <Route componet={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
