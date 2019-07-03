import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Activities from './components/Activities';
import Objectives from './components/Objectives';
import Obituaries from './components/Obituaries';
import Gallery from './components/Gallery';
import Board from './components/Board';
import Content from './components/Content/Content';

class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path='/activities' component={Activities}/>
          <Route exact path='/objectives' component={Objectives}/>
          <Route exact path='/obituaries' component={Obituaries}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/board' component={Board}/>
          <Route exact path='/content' component={Content}/>
          {/* <Route componet={NotFound} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
