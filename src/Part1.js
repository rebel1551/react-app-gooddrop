import React, { Component } from 'react';
import logo from './logo.svg';
import './Part1.css';
import part1img from './bike.JPG';
class Part1 extends Component {
  render() {
    return (
      <div className="Part1">
       <div className="Part1-title">
         <h2>Bike Shipping Through Railways Got</h2><h2>Convienient and Easy</h2>
         </div>
        <div className="part1-image">
          <center><img src={part1img} className="img img-responsive" alt="bike"/></center>
          </div> 
          <div className="part1-select-table">
             <center>
             <div className="btn-group">
              <div className="btn-group">
                <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">
                  YOUR PARCEL DETAIL&nbsp;&nbsp;<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">parcel</a></li>
                  <li><a href="#">parcel</a></li>
                </ul>
              </div>
              <div className="btn-group">
                <button type="button" class="btn  dropdown-toggle" data-toggle="dropdown">
                YOUR BIKE DETAIL&nbsp;&nbsp;<span className="caret"></span>
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">model</a></li>
                  <li><a href="#">model</a></li>
                </ul>
              </div>
             
              {/*<button type="button" class="btn btn-primary"></button>*/}
              <button type="button" className="btn btn-danger ">PRICE ESTIMATE</button>
            
            </div> 
              </center>
          </div>
      </div>
    );
  }
}

export default Part1;
