import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
render() {
    return (
        <div className="header">
            <a href="#default" className="logo">
              <img src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/14666042_1801634140106633_1295643331009643949_n.png?_nc_cat=0&oh=6fc2f324b4665ca75c72dad92bef27f3&oe=5B2B1643" alt="bike"/>
              GOOD<span className="title">DROP</span>
            </a>
            <div className="header-right">
                <a href="#home">
                    <span class="glyphicon glyphicon-earphone"></span>
                     &nbsp;&nbsp;9155844753</a>
                <a href="#contact">
                     <i className="glyphicon glyphicon-user"></i>
                    &nbsp;&nbsp;Account
                </a>
            </div>
        </div> 
    );
  }
};
export default Header;