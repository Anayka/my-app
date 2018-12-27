import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul>
          <li><a href="#d">Home</a></li>
          <li><a href="#d">Nosotros</a></li>
          <li className="dow"><a href="#d">Descargar</a></li>
       </ul>
      </div>
    );
  }
}

export default Header;
