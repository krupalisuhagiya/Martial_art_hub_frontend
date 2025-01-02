import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import CommanProfileColSecond from "../CommanProfileColSecond";
import CommanProfileColFirst from "../CommanProfileColFirst";
import resetpasswordimg from "../../../../../image/createPassword.png";
import Getintouch from "../../../../comman/Getintouch";
import Footer from "../../../../comman/Footer";
import "./ResetPassword.css";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
function ResetPassword() {
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState(false);
  const [isCreatePasswordVisible, setIsCreatePasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [currentPasswordError, setCurrentPasswordError] = useState("");
  // const [createPasswordError, setCreatePasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validatePasswords = () => {
    let isValid = true;
    // setCurrentPasswordError("");
    // setCreatePasswordError("");
    // setConfirmPasswordError("");

    if (!currentPassword) {
      toast.error("Current password is required");
      isValid = false;
    }

    if (!newPassword) {
      toast.error("New password is required");
      isValid = false;
    }

    if (newPassword !== confirmPassword) {
      // setConfirmPasswordError("Passwords do not match");
      toast.error("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      toast.success("Password reset successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };
  const navigate = useNavigate();
  const forgotpage = () => {
    navigate("/Student_forgot_password");
  };

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
          <div
            className="col-md-9"
            style={{ marginTop: "30px", marginBottom: "50px" }}
          >
            <CommanProfileColSecond />
            <div>
              <div className="student_profile_forgot">
                <div className="student_profile_forgot_div">
                  <img
                    src={resetpasswordimg}
                    alt="error"
                    style={{ marginTop: "-30px" }}
                    className="student_profile_forgotimg"
                  />
                  <h5>Reset Your Password</h5>
                  <p>
                    Regularly resetting your password is essential for account
                    security. Follow the steps below to reset your password and
                    keep your account safe.
                  </p>
                  {/* --------------------------------current password---------------------------- */}
                  <div style={{ position: "relative" }}>
                    <input
                      type={isCurrentPasswordVisible ? "text" : "password"}
                      placeholder="Enter current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <span
                      onClick={() =>
                        setIsCurrentPasswordVisible(!isCurrentPasswordVisible)
                      }
                      style={{
                        position: "absolute",
                        right: "80px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {isCurrentPasswordVisible ? <VscEye /> : <VscEyeClosed />}
                    </span>
                  </div>
                  <p className="student_profile_reset_password">
                    Didn't remember?
                    <span
                      onClick={forgotpage}
                      className="student_profile_forfor_redirect"
                    >
                      {" "}
                      Forgot Password
                    </span>
                  </p>
                  {/* {currentPasswordError && (
                    <p style={{ color: "red" }}>{currentPasswordError}</p>
                  )} */}
                  {/* --------------------------------new password---------------------------- */}
                  <div style={{ position: "relative" }}>
                    <input
                      type={isCreatePasswordVisible ? "text" : "password"}
                      placeholder="Create new Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <span
                      onClick={() =>
                        setIsCreatePasswordVisible(!isCreatePasswordVisible)
                      }
                      style={{
                        position: "absolute",
                        right: "80px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {isCreatePasswordVisible ? <VscEye /> : <VscEyeClosed />}
                    </span>
                  </div>
                  {/* {createPasswordError && (
                    <p style={{ color: "red" }}>{createPasswordError}</p>
                  )} */}
                  {/* --------------------------------confirm password---------------------------- */}
                  <div style={{ position: "relative" }}>
                    <input
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      placeholder="Re-enter Password"
                      style={{ marginTop: "8px" }}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span
                      onClick={() =>
                        setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                      }
                      style={{
                        position: "absolute",
                        right: "80px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        cursor: "pointer",
                      }}
                    >
                      {isConfirmPasswordVisible ? <VscEye /> : <VscEyeClosed />}
                    </span>
                  </div>
                  {/* {confirmPasswordError && (
                    <p style={{ color: "red" }}>{confirmPasswordError}</p>
                  )} */}

                  <button
                    className="student_profile_otp"
                    onClick={handleSubmit}
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <div>
        <Getintouch />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ResetPassword;
