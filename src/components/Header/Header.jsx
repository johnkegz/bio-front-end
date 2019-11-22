import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './header.scss';


class Header extends Component {
  render() {
    return (
    <div>
        <div className="row nav-menu">
        <div className="col-md-1"></div>
        <div className="col-md-3 educators-title">
          <img src="img/logo5.jpg" className="logo" alt="" />
          Bio
      </div>
      <div className="col-md-6 nv">
        <ul className='navigation' id='navigation'>
                    <li><a href='/'>Home</a></li>
                    <li><NavLink exact to="/activities">Activities</NavLink></li>
                    <li><NavLink exact to="/objectives">Objectives</NavLink></li>
                    <li><NavLink exact to="/obituaries">Obituaries</NavLink></li>
                    <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                    <li><NavLink exact to="/board">Board</NavLink></li>
                    <li><NavLink exact to="/contact us">Contact us</NavLink></li>
                    <li><span className="glyphicon glyphicon-search" >search</span></li>
        </ul>
        </div>
        <div className="col-md-2"></div>
        </div>
    </div>);
  }
}

export default Header;
