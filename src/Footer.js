import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
render() {
    return (
        <footer className="Footer">
          <div className="container-fluid">
           <div className="row">
             
             <div className="col-md-2" id="footer-desc">
                 <h6><b>Company</b></h6>
                 <a href="#">About Us</a>
                 <a href="#">Customer Reviews</a>
                 <a href="#">Booking Terms</a>
                  <a href="#">Terms of Use</a>
                   <a href="#">Privacy Policy</a>
             </div>
             <div className="col-md-2" id="footer-desc">
                 <h6><b>Support</b></h6>
                   <a href="#">How To</a><br></br>
                   <a href="#">FAQs</a>
                 
             </div>
             <div className="col-md-2" id="footer-desc">
                 <h6><b>Need Help</b></h6>
                 <a href="#">support@gooddrop.com</a>
                  <a href="#">Call at 9155844753</a>
             </div>
             <div className="col-md-6" id="social-logo">
                 <center>
                <a href="#"> <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fseo-web-15%2F465%2Fweb-user-interface_46-512.png&f=1" alt="insta"/></a>
                <a href="#"><img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F137419%2Fisolated%2Fpreview%2Fb1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png&f=1" alt="twiter"/></a>
                <a href="#"> <img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fthomashunsaker.com%2Falishahunsaker%2Ficons%2Ffacebook_icon_circle_512x512.png&f=1" alt="facebook" /></a>
              </center>
             </div>
            </div> 
            </div>   
        </footer> 
    );
  }
};
export default Footer;