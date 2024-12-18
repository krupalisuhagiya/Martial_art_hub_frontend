import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import "../comman/Footer.css";

function Footer() {
  return (
    <div className="footer1">
      <div className="footer2">
        <div className="footer-hub">
          <h2>martial arts hub.</h2>
          <p>Created by martial artists for martial artists.</p>
          <div className="footer-icon">
            <FaFacebookF />
            <FaTwitter />
            <RiInstagramFill />
          </div>
        </div>
        <div className="footer-hub">
            <h2 style={{fontWeight:"500"}}>About</h2>
            <p>Who we are</p>
            <p>Why choose us</p>
            <p>Our Categories</p>
        </div>
        <div className="footer-hub">
            <h2 style={{fontWeight:"500"}}>Support</h2>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Frequently Asked Questions</p>
        </div>
        <div className="footer-want">
            <h2>Want to stay updated?</h2>
            <p>Subscribe to our newsletter</p>
            <div className="footer-form">
                <input type="email" placeholder="Enter Email" className="footer-email rounded-pill"  />
                <button className="rounded-pill">Join</button>
            </div>
        </div>
      </div>
      <div className="last">
        <p>© Copyright 2024 - <span>martial arts hub.</span>, All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
