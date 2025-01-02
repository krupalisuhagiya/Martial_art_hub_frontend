import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./CommanProfile.css";

function CommanProfileColFirst() {
  const location = useLocation();
  const [user, setUser] = useState({ email: "", name: "" });
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

      // Use the profile picture URL or base64 string stored
      const profilePic = parsedProfile.profile_picture || null;
      setProfilePicture(profilePic);
    }
  }, []);
 

  if (!profile) {
    return <div>Loading...</div>;
  }

  const student_profilepage = [
    {
      name: "My Profile",
      url: "/StudentProfile",
    },
    {
      name: "Log In Details",
      url: "/Student_login_details",
    },
    {
      name: "Forgot Password",
      url: "/Student_forgot_password",
    },
    {
      name: "Reset Password",
      url: "/Student_ResetPassword",
    },
    {
      name: "Favorite Instructors",
      url: "/Student_Favorite_Instructors",
    },
    {
      name: "Booking History",
      url: "/Student_Booking_History",
    },
  ];

  return (
    <div>
      <div className="studentProfile_container1">
        <div className="student_profile_img">
          {profilePicture ? (
            <img src={profilePicture} alt="Profile" />
          ) : (
            <div className="default-profile-picture">
              <span className="student_profile_im_span">
                {user.email && /^[A-Za-z]/.test(user.email)
                  ? user.email.charAt(0).toUpperCase()
                  : "N/A"}
              </span>
            </div>
          )}
        </div>

        <div>
          <Nav className="navbaratagmenu" id="navbaratagmenu">
            {student_profilepage.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className={`nav-link ${
                  location.pathname === item.url ? "active" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </Nav>
        </div>
      </div>
    </div>
  );
}

export default CommanProfileColFirst;
