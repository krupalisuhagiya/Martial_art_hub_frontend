import React, { useEffect, useState } from "react";
import "./LogInDetails.css";
import Getintouch from "../../../../comman/Getintouch";
import Footer from "../../../../comman/Footer";
import { FaQuoteRight } from "react-icons/fa6";
import CommanProfileColFirst from "../CommanProfileColFirst";
import CommanProfileColSecond from "../CommanProfileColSecond";

function LogInDetails() {
  const [user, setUser] = useState({ email: "", name: "" });
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser({ email: parsedUser.email, name: parsedUser.name });
      } catch (error) {
        setUser({ email: storedUser, name: "" });
      }
    }
  }, []);
  return (
    <div>
      <div className="studentProfile_div">
        <div className="studentProfile_container">
          <div className="student_profile_FaQuoteRight_div">
            <p className="student_profile_FaQuoteRight">
              <FaQuoteRight />
            </p>
            <p className="studentProfile_p">
              We are what we repeatedly do. Excellence then is not an act but a
              habit.
            </p>
          </div>
        </div>
      </div>
      <div className="studentProfile_container1">
        <div className="row">
          <div className="col-md-3">
            <CommanProfileColFirst />
          </div>
          <div className="col-md-9" style={{ marginTop: "30px" }}>
            <CommanProfileColSecond/>
            <div className="student_login_details">
              <h6 className="student_login_details_h6">Login Details</h6>
              <p className="student_login_details_p">
                The information you provided during login is displayed below.
                You can update your details here.
              </p>
              <div>
                <form className="email-login">
                  <div>
                    <label className="label-email">Email ID</label>
                    <div className="email-login1" id="email-login1">
                      <input
                        type="email"
                        className="rounded-pill"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label-email">Name</label>
                    <div className="email-login1" id="email-login1">
                      <input
                        type="text"
                        name="name"
                        value={user.name}
                        // onChange={handleInputChange}
                        className="rounded-pill"
                        // placeholder="Name"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Getintouch />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LogInDetails;
