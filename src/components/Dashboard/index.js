import React, { Component } from 'react'
// import Header from './Header';
import SideMenu from './SideMenu';
import LayOut from './layOut';
import MainComponent from './MainComponent';

export default class DashBoard extends Component {
    render() {
        return (
            <div className="main">
            
               <MainComponent />
               
            </div>
        )
    }
}
