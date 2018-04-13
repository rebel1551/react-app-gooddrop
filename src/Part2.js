import React, { Component } from 'react';
import './Part2.css';
import part1 from './part1.JPG';
import part2 from './part2.JPG';
import part3 from './part3.JPG';
class Part2 extends Component {
  render() {
    return (
      <div className="Part2">
       <div className="Part2-title">
         <h1>Bike Shipping in easy with us</h1><h1>in 3 simple steps</h1>
         </div>
         <div className="Part2-step">
            <div className="row">
                <div className="col-md-3">
                     <span></span>
                </div>
                <div className="col-md-2">
                    <center>
                    <span className="underline"><span className="text">STEP1</span></span>
                    <div className="part2-image" >
                     <img src={part1} alt="part1"/>
                     </div>
                     <div className="part2-text"  >
                         <h6>Enter bike shipping</h6><h6>details</h6>
                     </div>
                     </center>
                </div>
                <div className="col-md-2">
                     <center>
                    <span className="underline"><span className="text">STEP2</span></span>
                     <div className="part2-image " >
                     <img src={part2} alt="part1"/>
                     </div>
                     <div className="part2-text" >
                          <h6>Hand over the keys to</h6><h6>Gooddrop executives</h6>
                     </div>
                      </center>
                </div>
                <div className="col-md-2">
                     <center>
                    <span className="underline"><span className="text">STEP3</span></span>
                    <div className="part2-image" >
                     <img src={part3} alt="part1"/>
                     </div>
                      <div className="part2-text" >
                           <h6>Get your bike at</h6><h6>your destination</h6>
                     </div>
                      </center>
                </div>
                <div className="col-md-3">
                     <span></span>
                </div>
            </div>   
        </div>  
          <div className="part2-btn">
              <center>
                <button className="btn btn-book ">BOOK NOW</button>  
                <button className="btn btn-contact ">CONTACT</button>
            </center>   
            </div> 
      </div>
    );
  }
}

export default Part2;
