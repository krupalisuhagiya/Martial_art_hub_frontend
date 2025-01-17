import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaQuoteRight } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import CommanProfileColFirst from "../CommanProfileColFirst";
import CommanProfileColSecond from "../CommanProfileColSecond";
import forgotimg from "../../../../../image/ForgotPassword.png";
import Footer from "../../../../comman/Footer";
import Getintouch from "../../../../comman/Getintouch";
import createPassword from "../../../../../image/createPassword.png";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import "./ForgotPassword.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import baseUrl from "../../../../../baseUrl";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIThirddModalOpen] = useState(false);
  const [user, setUser] = useState({ email: "", name: "" });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [formData, setFormData] = useState({
    NewPassword: "",
    confrim_password: "",
    studentId: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const studentId = localStorage.getItem("studentId");

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

  // Timer functionality for OTP
  useEffect(() => {
    let countdown;
    if (resendDisabled && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }
    return () => clearInterval(countdown);
  }, [timer, resendDisabled]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error on input change
  };
  const [isLoading, setIsLoading] = useState(false);
  const handleGetOTP = async () => {
    setIsLoading(true);
    // Mark function as async
    try {
      const response = await axios.post(
        `${baseUrl}/student/forgot/password/sendotp`,
        { email }
      );
      toast.success(response.data.message || "OTP sent successfully!");
      setIsModalOpen(true);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  const handleResend = async () => {
    // Mark function as async
    try {
      const response = await axios.post(
        `${baseUrl}/student/forgot/password/resendotp`,
        { email }
      );
      toast.success(response.data.message || "OTP resent successfully!");
      setTimer(60);
      setResendDisabled(true);
      setOtp(["", "", "", ""]);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to resend OTP.");
    }
  };
  const closeFirstModal = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
    setIThirddModalOpen(true);
  };

  const goBackToFirstModal = () => {
    setIsSecondModalOpen(false);
    setIsModalOpen(true);
  };
  const goBackToSecondModal = () => {
    setIThirddModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const handleOtpChange = (index, value) => {
    if (value.match(/^[0-9]*$/)) {
      // Allow only numbers
      const newOtp = [...otp];
      newOtp[index] = value.slice(-1);
      setOtp(newOtp);

      // Auto-focus next input if current input is filled
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleOtpSubmit = async () => {
    setIsLoading(true);
    // Mark function as async
    if (otp.some((digit) => digit.trim() === "")) {
      toast.error("Please fill out all OTP fields!");
      setIsLoading(false);
      return;
    }
    try {
      const otpValue = otp.join("");
      const response = await axios.post(
        `${baseUrl}/student/forgot/password/otpVerification`,
        {
          otp: otpValue,
          studentId: studentId,
        }
      );
      toast.success(response.data.message || "OTP verified successfully!");
      setIsSecondModalOpen(false);
      setIThirddModalOpen(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setPasswordError("");
    setConfirmPasswordError("");
  };
  const validatePasswords = () => {
    if (!formData.NewPassword) setPasswordError("Please enter your password.");
    if (formData.NewPassword !== formData.confrim_password) {
      setConfirmPasswordError("Passwords do not match.");
    }
  };
  const handleCreatePassword = async () => {
    setIsLoading(true);
    validatePasswords();
    if (passwordError || confirmPasswordError) return;
    try {
      const response = await axios.post(`${baseUrl}/student/newpassword`, {
        NewPassword: formData.NewPassword,
        confrim_password: formData.confrim_password,
        studentId: studentId,
      });
      toast.success(response.data.message || "Password created successfully!");
      // setIsThirdModalOpen(false);
      setIThirddModalOpen(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create password.");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleBackdropClick = () => {
    closeFirstModal();
    closeSecondModal();
    setIThirddModalOpen(false);
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
            <div className="student_profile_forgot">
              <div className="student_profile_forgot_div">
                <img
                  src={forgotimg}
                  alt="error"
                  className="student_profile_forgotimg"
                />
                <h5>Forgot Your Password?</h5>
                <p>
                  Do Not worry! We will help you in logging in back to your
                  Martial Arts Hub account safely! Enter Your Email address and
                  proceed further!
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <br />
                <button
                  className="student_profile_otp"
                  onClick={handleGetOTP}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div
                      className="spinner-border text-light"
                      role="status"
                      style={{ width: "1rem", height: "1rem" }}
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    " Get OTP"
                  )}
                </button>
                <p style={{ marginTop: "10px" }}>
                  Didn't receive OTP?
                  <span
                    className={`resend-link ${
                      resendDisabled ? "disabled" : ""
                    }`}
                    onClick={!resendDisabled ? handleResend : undefined}
                  >
                    Resend
                  </span>
                  {/* <span className="student_profile_resend">Resend</span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------first modal popup */}
      <Modal
        show={isModalOpen}
        onHide={handleBackdropClick}
        centered
        dialogClassName="custom-modal"
        backdrop="true" //not close popup clickon close popup
      >
        <Modal.Body
          className="text-center success-modal"
          id="student_profile_forgot_otp"
        >
          <div className="popup-checkmark2">
            <div className="popup-checkmark1">
              <div className="popup-checkmark">
                <FaCheck />
              </div>
            </div>
          </div>
          <h4>OTP Sent!</h4>
          <p className="check-p">
            OTP has been successfully sent to your email! Please check your
            email app and proceed to the new password generation step.
          </p>
          <button
            type="button"
            onClick={closeFirstModal}
            className="okay rounded-pill"
          >
            Go to email app
          </button>
        </Modal.Body>
      </Modal>

      {/* ----------------second modal popup */}
      <Modal
        show={isSecondModalOpen}
        onHide={handleBackdropClick}
        centered
        dialogClassName="custom-modal"
        backdrop="true" //not close popup clickon close popup
      >
        <Modal.Body
          className="text-center success-modal"
          id="student_profile_forgot_otp"
        >
          <div className="popup-header">
            <FaArrowLeft
              className="back-arrow"
              onClick={goBackToFirstModal}
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
            />
          </div>

          <h4>OTP Verification</h4>
          <p>
            Please enter OTP (one time password) we sent to your email
            <span> {user.email}</span>
            <span>
              <AiOutlineEdit />
              Edit
            </span>
          </p>
          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                placeholder="-"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="otp-input"
              />
            ))}
          </div>
          <p className="resend-container">
            Didn't receive OTP?{" "}
            <span
              className={`resend-link ${resendDisabled ? "disabled" : ""}`}
              onClick={!resendDisabled ? handleResend : undefined}
            >
              Resend
            </span>
            {resendDisabled && (
              <span className="timer">
                {" "}
                ⏱️ 00:{timer < 10 ? `0${timer}` : timer}
              </span>
            )}
          </p>
          <button
            type="button"
            onClick={handleOtpSubmit}
            className="okay rounded-pill"
            id="student_profile_otp_submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div
                className="spinner-border text-light"
                role="status"
                style={{ width: "1rem", height: "1rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </Modal.Body>
      </Modal>
      {/* ------------------------------third modal popup */}
      <Modal
        show={isThirdModalOpen}
        onHide={handleBackdropClick}
        centered
        dialogClassName="custom-modal"
        backdrop="true" //not close popup clickon close popup
      >
        <Modal.Body
          className="text-center success-modal"
          id="student_profile_forgot_otp success_modal"
        >
          <div className="popup-header">
            <FaArrowLeft
              className="back-arrow"
              onClick={goBackToSecondModal}
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
            />
          </div>

          <img
            src={createPassword}
            alt="error"
            style={{ marginTop: "-70px" }}
          />
          <h3 style={{ marginTop: "-20px" }}>Create New Password</h3>
          <p className="student_profile_forgot_craete">
            This password will be used to protect your account and keep your
            information safe.
          </p>
          <div>
            <div
              className="password-input-container"
              style={{ position: "relative" }}
            >
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Create Password"
                name="NewPassword" // Add name attribute
                value={formData.NewPassword}
                onChange={handlePasswordChange}
                className="student_craete_password"
              />
              <span
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {isPasswordVisible ? <VscEye /> : <VscEyeClosed />}
              </span>
              {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
            </div>
            <div
              className="password-input-container"
              style={{ position: "relative" }}
            >
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="Re-enter Password"
                name="confrim_password" // Add name attribute
                value={formData.confrim_password}
                onChange={handlePasswordChange}
                className="student_craete_password"
              />
              <span
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                } // Toggle visibility
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              >
                {isConfirmPasswordVisible ? <VscEye /> : <VscEyeClosed />}
              </span>
            </div>
            {confirmPasswordError && (
              <p style={{ color: "red" }}>{confirmPasswordError}</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleCreatePassword}
            className="okay rounded-pill"
            id="student_profile_otp_submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <div
                className="spinner-border text-light"
                role="status"
                style={{ width: "1rem", height: "1rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Create"
            )}
          </button>
        </Modal.Body>
      </Modal>
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

export default ForgotPassword;
