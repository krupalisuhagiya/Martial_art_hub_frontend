import React from "react";
import { MdEmail } from "react-icons/md";
import "./Getintouch.css";
function Getintouch() {
  return (
    <div>
      <section className="get-in">
        <div className="get-in-1">
          <div className="get-in-2">
            <h2>Get in touch with us anytime!</h2>
            <p>
              You can always send us a email or message. <br /> We will be happy
              to help you out.
            </p>
            <div className="mail">
              <div className="mail-2 rounded-pill">
                <MdEmail className="mdmail" />
              </div>
              <div className="shoot">
                <h3>Shoot us an email</h3>
                <p>yourcompany@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="form">
            <input type="text" placeholder="Full Name" className="fullname" />
            <input type="email" placeholder="Email" className="fullname" />
            <textarea
              placeholder="Enter your message here"
              className="fullname"
            />
            <button className="send-msg rounded-pill">Send My Message</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Getintouch;
