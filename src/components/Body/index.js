import React, { Component } from 'react';
import './body.css';
import foco from './foco.png';

class Body extends Component {
  render() {
    return (
      <div className="body">

        <div className="left">
           <h2>HAZ DE TU VIDA ALGO MÁS SENCILLA</h2>
           <p>Blalalala lalalallala lalalallala</p>
           <p>Blalalala lalalal lalalal</p>
           <button className="button">
              <strong>ENCENDER</strong>
           </button>
        </div>

        <div className="right">
           <img src={foco} alt="cdscsdc" className="image"/>
        </div>

      </div>

    );
  }
}

export default Body;
