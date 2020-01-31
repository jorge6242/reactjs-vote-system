import React from 'react';
import './index.sass';

export default function Footer() {
    return (
        <div className="footer-container"> 
        <div className="footer-container__menu-list">
          <div className="footer-container__menu">
            Terms and conditions
          </div>
          <div className="footer-container__menu">
            Privacy Policy
          </div>
          <div className="footer-container__menu">
            Contact Us
          </div>
        </div>
        <div  className="footer-container__menu-socials">
          <div className="footer-container__menu-socials-follow">
            Follow Us
            </div>
            <div className="footer-container__menu-socials-facebook" >
              <div />
            </div>
            <div className="footer-container__menu-socials-twitter" >
            <div />
            </div>
        </div>
      </div>
    )
}