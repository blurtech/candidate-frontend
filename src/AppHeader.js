import React, { Component } from 'react';
import './AppHeader.css';
import logo from "./logo.png";

class AppHeader extends Component {
  render() {
    return (
      <div className="AppHeader">
        <div className="Logo"><img src={logo} width="100px" height="100px" /> <div className="Ded">Кан<b>дед</b>ат</div>
        <div className="Enter"><a href="#">Войти</a></div>  </div>
      </div>
    );
  }
}

export default AppHeader;