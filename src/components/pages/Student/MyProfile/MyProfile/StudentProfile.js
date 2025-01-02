import React, { useEffect, useState } from "react";
import "./StudentProfile.css";
import classimg9 from ".././../../../../image/9.png";
import classimg8 from ".././../../../../image/8.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import Getintouch from "../../../../comman/Getintouch";
import Footer from "../../../../comman/Footer";
import { FaQuoteRight } from "react-icons/fa6";
import CommanProfileColFirst from "../CommanProfileColFirst";
import CommanProfileColSecond from "../CommanProfileColSecond";

function StudentProfile() {
  const student_class = [
    {
      img: classimg9,
      title: "Wrestling",
      complete: "75",
      details:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      button: "Starts on 22 Aug",
    },
    {
      img: classimg8,
      title: "Boxing",
      complete: "100",
      details:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      button: "See Details",
    },
  ];
  const student_payment = [
    {
      img: classimg9,
      name: "Wrestling",
      details:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Succeed",
    },
    {
      img: classimg8,
      name: "Wrestling",
      details:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Unsuccessful",
    },
  ];

  // -------------------------store data----------------
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

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
            <CommanProfileColSecond />
            <div className="studentprofile_aboutMe">
              <h6>About Me</h6>
              <p>{profile.aboutMe}</p>
            </div>
            <div className="studentprofile_aboutMe">
              <h6>Additional Details</h6>
              <p>{profile.additionlDetail}</p>
            </div>
            <div className="student_profile_Myclass_div">
              <h6>My Classes</h6>
              <div className="student_profile_class">
                {student_class.map((item, index) => (
                  <div key={index} className="student_profile_class_details">
                    <img
                      src={item.img}
                      alt="error"
                      className="sudent_profile_classimg"
                    />
                    <div style={{ display: "flex", marginTop: "20px" }}>
                      <h6 className="student_profile_classtitle">
                        {item.title}
                      </h6>
                      <div
                        className={`${
                          item.complete === "75"
                            ? "studentclass_complete"
                            : "studentclass_complete100"
                        } ${
                          index === 1 ? "second-button" : ""
                        } studentclass_outer`}
                      >
                        <div className="studentclass_inner">
                          {item.complete}%
                        </div>
                      </div>
                    </div>
                    <p>{item.details}</p>
                    <button
                      className={`${
                        item.button === "Starts on 22 Aug"
                          ? "student_starts"
                          : "student_see"
                      } ${index === 1 ? "second-button" : ""}`}
                    >
                      {item.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="student_payment_history">
              <h6 className="student_payment_history_h6">Payment History</h6>
              <div className="">
                <div className="class-payment">
                  {student_payment.map((item, index) => (
                    <div key={index} className="payment-item" id="payment-item">
                      <div className="payment-img" id="payment-img">
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className="payment-info1">
                        <div className="payment-info" id="payment-info">
                          <h5>{item.name}</h5>
                          <p>{item.details}</p>
                          <div className="course">
                            <p>
                              <span>Course Duration:</span>
                              {item.CourseDuration}
                            </p>
                            <p>
                              <span>Instructor Name:</span>
                              {item.InstructorName}
                            </p>
                          </div>
                        </div>
                        <div className="payment-button" id="payment-button">
                          <p> ${item.price}</p>
                          <button
                            className={`${
                              item.btnname === "Payment Succeed"
                                ? "success"
                                : "unsuccess"
                            } ${index === 1 ? "second-button" : ""}`}
                          >
                            {item.btnname}

                            <MdOutlineArrowOutward className="arrowup" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Getintouch />
        <Footer />
      </div>
    </div>
  );
}

export default StudentProfile;
