import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';

class Main extends Component {
  render() {
    const { history } = this.props;
    return (
    <div>
        <Header history = {history}/>
        Main
        <Footer />
    </div>);
  }
}

export default withRouter(Main);
