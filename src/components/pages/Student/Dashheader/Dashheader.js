import React, { useEffect, useState } from "react";
import Dashboard from "../../../comman/Dashboard";
import "./Dashheader.css";
import { HiOutlineCamera } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import classimg14 from "../../../../image/14.png";
import classimg13 from "../../../../image/13.png";
import classimg11 from "../../../../image/11.png";
import paymentimg1 from "../../../../image/8.png";
import paymentimg2 from "../../../../image/9.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Dashheader() {
  const [user, setUser] = useState({ email: "", name: "" });
  const navigate = useNavigate();

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

  const stdpro = [
    {
      online: "Online Now",
      Joinedas: "Student",
      Joinedon: "28 July, 2024",
      ProfileCompletion: "5%",
      Complete: " (Complete Now)",
    },
  ];

  const ClassRequests = [
    {
      img: classimg14,
      name: "Kiya John",
      instructor: "• Brazilian Jiu Jitsu Instructor",
      intro:
        "Your Inquiry message request is reached to the Instructor. Please wait for the confirmation. ",
      btn: "View",
    },
    {
      img: classimg13,
      name: "Jhon Martin",
      instructor: "• Wrestling Instructor",
      intro:
        "Your Inquiry message request is reached to the Instructor. Please wait for the confirmation. ",
      btn: "View",
    },
    {
      img: classimg11,
      name: "Keyn Mojho",
      instructor: "• Boxing Instructor",
      intro:
        "Your Inquiry message request is reached to the Instructor. Please wait for the confirmation. ",
      btn: "View",
    },
  ];

  const payment = [
    {
      img: paymentimg1,
      name: "Wrestling",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Succeed",
    },
    {
      img: paymentimg2,
      name: "Boxing",
      CourseDuration: "Time here",
      InstructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Unsuccessful",
    },
  ];
  const recent = [
    {
      img: paymentimg1,
      name: "Wrestling",
      intro:
        "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      btnname: "start on 25 Aug",
    },
    {
      img: paymentimg2,
      name: "Boxing",
      intro:
        "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      btnname: "see Details",
    },
  ];

  // ----------------------------------profile picture----------
  const [profile, setProfile] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

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

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfile(parsedProfile);
      setProfilePicture(parsedProfile.profile_picture || null);
    }
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }
  // --------------------------------------------------
  const StudentProfilenavigate = () => {
    navigate("/StudentProfile");
  };

  return (
    <div>
      <Dashboard />
      <div className="greedtemp row">
        <div className="std-dash col-lg-3">
          {stdpro.map((profile, index) => (
            <div key={index} className="profile-section">
              <div className="icon-container">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt="Profile"
                    style={{
                      width: "210px",
                      height: "210px",
                      border: "1px solid black",
                      borderRadius: "50%",
                      marginLeft: "35px",
                    }}
                  />
                ) : (
                  <span className="usericonefont">
                    {user.email && /^[A-Za-z]/.test(user.email)
                      ? user.email.charAt(0).toUpperCase()
                      : "N/A"}
                  </span>
                )}
                <div className="camera" onClick={StudentProfilenavigate}>
                  <HiOutlineCamera />
                </div>
              </div>

              <div className="profile-details">
                <div className="nameonly">
                  <h2>{user.name || "No Name Found"}</h2>
                  <div className="status">
                    <p>
                      <GoDotFill className="dotfont" /> {profile.online}
                    </p>
                  </div>
                </div>
                <div className="role">
                  <p>
                    <span>Role:</span> {profile.Joinedas}
                  </p>
                  <p>
                    <span>Joined On:</span> {profile.Joinedon}
                  </p>
                  <p className="profilec">
                    <span>Profile Completion:</span>
                    {profile.ProfileCompletion}
                  </p>
                  <p className="complete" onClick={StudentProfilenavigate}>
                    {profile.Complete}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="online2 col-lg-9">
          <div className="row gx-5 class-request2">
            <div className="class-request col-5">
              <div className="reqvest-btn">
                <div>
                  <p>Class Requests</p>
                </div>
                <div>
                  <button className="request-now">Explore Now</button>
                </div>
              </div>
              <div className="class-request1">
                {ClassRequests.map((request, index) => (
                  <div key={index} className="request-item">
                    <div className="req-img">
                      <img
                        src={request.img}
                        alt={request.name}
                        className="request-img"
                      />
                    </div>
                    <div className="requestbtn">
                      <div className="reqvestallitem">
                        <div className="reqvestallitem1">
                          <h5>
                            {request.name} <span>{request.instructor}</span>
                          </h5>
                        </div>
                        <div className="inffo">
                          <p>{request.intro}</p>
                        </div>
                      </div>
                      <div className="request-view1">
                        <button className="request-view">{request.btn}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="class2 col-5">
              <p className="py">Payments</p>
              <div className="class-payment">
                {payment.map((item, index) => (
                  <div key={index} className="payment-item">
                    <div className="payment-img">
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className="payment-info1">
                      <div className="payment-info">
                        <h5>{item.name}</h5>
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
                      <div className="payment-button">
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
            <div className="class3 col-12">
              <p>Recent Classes</p>
              <div className="recent-2">
                {recent.map((item, index) => (
                  <div key={index} className="recent">
                    <div className="recent1">
                      <img src={item.img} alt="error" />
                    </div>
                    <div className="details">
                      <div className="recent-class">
                        <div className="recent-start">
                          <h5>{item.name}</h5>
                        </div>
                        <div className="intro">{item.intro}</div>
                      </div>
                      <div className="start-date">
                        {/* <button>{item.btnname}</button> */}
                        <button
                          className={`${
                            item.btnname === "start on 25 Aug"
                              ? "aug"
                              : "details"
                          } ${index === 1 ? "second-button" : ""}`}
                        >
                          {item.btnname}
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
  );
}

export default Dashheader;
