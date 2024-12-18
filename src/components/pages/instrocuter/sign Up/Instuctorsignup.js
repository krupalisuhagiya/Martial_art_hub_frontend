import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck, FaGoogle, FaQuoteLeft } from "react-icons/fa";
import img20 from "../../../../image/20.png";
import eye from "../../../../image/eye.png";
import eyeslash from "../../../../image/eyeslash.png";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Instuctorsignup.css";
import Footer from "../../../comman/Footer";
import baseUrl from "../../../../baseUrl";
function Instuctorsignup() {
  const navigate = useNavigate();
  const [isLoginView, setIsLoginView] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const closeLoginModal = () => setShowLoginModal(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  const handleCreateAccount = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post(`${baseUrl}/instructor/signup`, {
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
        });
        if (response.status === 201 || response.status === 200) {
          setUser({
            email: formData.email,
          });

          localStorage.setItem(
            "user",
            JSON.stringify({ email: formData.email })
          );
          setShowSuccessModal(true);
        }
      } catch (error) {
        setErrors({
          signup:
            error.response?.data.message || "Signup failed. Please try again.",
        });
      }
    }
  };
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (formData.password !== formData.confirmPassword && !isLoginView) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateLoginForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleLogin = async () => {
    if (validateLoginForm()) {
      try {
        const response = await axios.post(`${baseUrl}/instructor/login`,{
            email: formData.email,
            password: formData.password,
          }
        );
        if (response.status === 200) {
          setUser(response.data.user);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          closeLoginModal();
        }
      } catch (error) {
        if (error.response) {
          setErrors({
            ...errors,
            login:
              error.response.data.message || "Login failed. Please try again.",
          });
        } else {
          setErrors({ ...errors, login: "An unexpected error occurred." });
        }
      }
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    closeLoginModal(); // Close the signup modal
    navigate("/Profile"); // Redirect to the home page
  };

  return (
    <div>
      <div style={{ marginTop: "70px" }}>
        <div
          show={showLoginModal}
          onHide={closeLoginModal}
          centered
          id="login-modal"
          className="login-model"
        >
          <Modal.Body>
            <div className="popup0">
              <div className="popup1">
                <div className="popup2">
                  <div className="form-login">
                    <FaArrowLeft
                      className="form-arrow"
                      onClick={closeSuccessModal}
                    />
                    {isLoginView ? (
                      <>
                        <h2>Welcome Back! Ready to Learn?</h2>
                        <p>
                          Please login to continue to your
                          <span style={{ fontWeight: "800" }}>
                            martial arts hub
                          </span>
                          account!
                        </p>
                        <form className="email-login">
                          <div>
                            <label className="label-email">Email</label>
                            <div className="email-login1">
                              <input
                                type="email"
                                className="rounded-pill"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                            {errors.email && (
                              <p className="error">{errors.email}</p>
                            )}
                          </div>
                          <div>
                            <label className="label-email">Password</label>
                            <div className="email-login1">
                              <input
                                className="rounded-pill"
                                placeholder="Password"
                                type={isPasswordVisible ? "text" : "password"}
                                id="id_password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                maxLength={6}
                              />
                              <img
                                src={isPasswordVisible ? eye : eyeslash}
                                alt="toggle visibility"
                                onClick={togglePasswordVisibility}
                                className="eye1"
                                id="togglePassword"
                                style={{ cursor: "pointer", marginLeft: "8px" }}
                              />
                            </div>
                            {errors.password && (
                              <p className="error">{errors.password}</p>
                            )}
                          </div>
                        </form>
                        <div className="tobtn" id="tobtn">
                          <button
                            type="button"
                            onClick={handleLogin}
                            className="account rounded-pill"
                          >
                            Log In to your account
                          </button>
                          <button className="google rounded-pill">
                            <FaGoogle />
                            Log In with Google
                          </button>
                        </div>
                        <p className="dont">
                          Don't have an account?
                          <span
                            onClick={() => setIsLoginView(false)}
                            style={{
                              fontWeight: "700",
                              color: "black",
                              textDecoration: "none",
                              cursor: "pointer",
                              marginLeft: "5px",
                            }}
                          >
                            Sign Up
                          </span>
                        </p>
                      </>
                    ) : (
                      <>
                        <h2>Welcome! Ready to Join?</h2>
                        <p>
                          Please sign up to continue to your{" "}
                          <span style={{ fontWeight: "800" }}>
                            martial arts hub
                          </span>{" "}
                          account!
                        </p>
                        <form className="email-login">
                          <div>
                            <label className="label-email">Email</label>
                            <div className="email-login1">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="rounded-pill"
                                placeholder="Email"
                              />
                            </div>
                            {errors.email && (
                              <p className="error">{errors.email}</p>
                            )}
                          </div>
                          <div>
                            <label className="label-email">Password</label>
                            <div className="email-login1">
                              <input
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                type={isPasswordVisible ? "text" : "password"}
                                className="rounded-pill"
                                placeholder="Password"
                                maxLength={6}
                              />
                              <img
                                src={isPasswordVisible ? eye : eyeslash}
                                alt="toggle visibility"
                                onClick={togglePasswordVisibility}
                                className="eye1"
                                id="togglePassword"
                                style={{ cursor: "pointer", marginLeft: "8px" }}
                              />
                            </div>
                            {errors.password && (
                              <p className="error">{errors.password}</p>
                            )}
                          </div>
                          <div>
                            <label className="label-email">
                              Confirm Password
                            </label>
                            <div className="email-login1">
                              <input
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="rounded-pill"
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Confirm Password"
                                maxLength={6}
                              />
                              <img
                                src={isPasswordVisible ? eye : eyeslash}
                                alt="toggle visibility"
                                onClick={togglePasswordVisibility}
                                className="eye1"
                                id="togglePassword"
                                style={{ cursor: "pointer", marginLeft: "8px" }}
                              />
                            </div>
                            {errors.confirmPassword && (
                              <p className="error">{errors.confirmPassword}</p>
                            )}
                          </div>
                        </form>
                        <div className="tobtn" id="tobtn">
                          <button
                            type="button"
                            onClick={handleCreateAccount}
                            className="account rounded-pill"
                          >
                            Create Account
                          </button>

                          <button className="google rounded-pill">
                            <FaGoogle />
                            Log In with Google
                          </button>
                        </div>
                        <p className="dont">
                          Already have an account?
                          <span
                            onClick={() => setIsLoginView(true)}
                            style={{
                              fontWeight: "700",
                              color: "black",
                              textDecoration: "none",
                              cursor: "pointer",
                              marginLeft: "5px",
                            }}
                          >
                            Log In
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                  <div className="welcome1" id="welcome1">
                    <img
                      src={isLoginView ? img20 : img20}
                      alt="Login/Signup Visual"
                    />
                    <div className="joining">
                      <FaQuoteLeft className="quote" />
                      <p>
                        Joining this martial arts community was the best
                        decision I ever made. Highly recommended!
                      </p>
                      <div className="john">
                        <h2>John Doe</h2>
                        <p>Student</p>
                      </div>
                    </div>
                    <div className="login-shape">
                      <h2>martial arts hub.</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
        <Modal
          show={showSuccessModal}
          onHide={closeSuccessModal}
          centered
          dialogClassName="custom-modal"
        >
          <Modal.Body className="text-center success-modal">
            <div className="popup-checkmark2">
              <div className="popup-checkmark1">
                <div className="popup-checkmark">
                  <FaCheck />
                </div>
              </div>
            </div>

            {/* <FaCheckCircle className="check" /> */}
            <h4>Success!</h4>
            <p className="check-p">
              Congratulations! Your martial arts hub student account is created
              and activated successfully. Start exploring our platform, talk
              with instructors and join your favourite classes!
            </p>
            <button
              type="button"
              onClick={closeSuccessModal}
              className="okay rounded-pill"
            >
              Okay, Thanks!
            </button>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Instuctorsignup;
