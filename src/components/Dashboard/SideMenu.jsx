// import React, { Component } from 'react'
// import './dashboard.css';
// import { NavLink } from 'react-router-dom';

// export default class SideMenu extends Component {
//     render() {
//         return (
//             <div className='leftPane'>
//             <div className='sidebar-wrapper'>
//                 <div className='sidebar-header'>
//                     sidebar header
//                 </div>
//                 <div className='sidebar-container'>
//                     <div className='innerSideBar'>
//                         <ul className='verticalNavMenu'>
//                             <li className='appSiderHeading'>Menu</li>
//                             <li className=''>
//                                 <a href='#'>
//                                     <i className='rockect'></i>
//                                     dashboard
//                                 </a>
//                                 <ul className="mmColapse">
//                                     <li>
//                                     <a href='http://localhost:3000/dashboard' className='mm-active'>
//                                         Analytic
//                                     </a>
//                                     </li>
//                                     <li>
//                                     <a href='http://localhost:3000/management'  className='mm-active'>
//                                     Management
//                                     </a></li>
//                                     <li>
//                                     <a href='#'>
//                                     Advertisement
//                                     </a></li>
//                                     <li>
//                                     <a href='#'>
//                                     Advertisement
//                                     </a>
//                                     </li>
//                                     <li>
//                                     <a href='#'>
//                                     Monitoring
//                                     </a>
//                                     </li>
//                                 </ul>
//                             </li>
//                             <li className=''></li>
//                             <li className=''></li>
//                             <li className=''></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             </div>
//         )
//     }
// }

import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboard.css";

const SideMenu = () => (
  <div className='leftPane'>
    <div className='sidebar-wrapper'>
      <div className='sidebar-header'>sidebar header</div>

      <div className='sidebar-container'>
        <div className='innerSideBar'>
          <ul className='verticalNavMenu'>
            <li className='appSiderHeading'>Menu</li>
            <li className=''>
           
                <i className='rockect'></i>
                dashboard
             

              <nav className='navigation'>
                <NavLink exact to='/Analytics'>
                  Stories
                </NavLink>
                <NavLink exact to='/management'>
                  Approved
                </NavLink>
                <NavLink exact to='/dashboard'>
                  Pending
                </NavLink>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default SideMenu;
