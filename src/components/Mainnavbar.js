import React, { useEffect, useState } from "react";
import { Dropdown, Modal, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FaArrowLeft, FaCheck, FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import logo from "../image/martial arts hub..png";
import img19 from "../../src/image/19.png";
import img20 from "../../src/image/20.png";
import eye from "../../src/image/eye.png";
import eyeslash from "../../src/image/eyeslash.png";
import "../components/Mainnavbar.css";
import { TiWarning } from "react-icons/ti";
import baseUrl from "../baseUrl";
import { ToastContainer, toast } from "react-toastify";

function Mainnavbar({ text }) {
  const dropdownItems = [
    { name: "Dashboard", url: "/Dashheader" },
    { name: "My Profile", url: "/StudentProfile" },
    { name: "Messages", url: "/Messages" }, // Define the route for Messages
  ];
  const dropdownItemsIns = [
    { name: "Dashboard", url: "/DashboardInstructor" },
    { name: "My Profile", url: "/MyProfileform" },
    { name: "Create Class", url: "/InstructorCreateClass" },
    { name: "Chat", url: "/InstructorChat" },
    { name: "Message Requests", url: "/InstructorMessageRequests" },
  ];
  // -----------------------------------------------dropdown map end------------------------

  const location = useLocation();
  const navigate = useNavigate();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confrim_password: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        setUser(null); // Set user to null if parsing fails
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "please enter your password";
    }
    if (formData.password !== formData.confrim_password && !isLoginView) {
      newErrors.confrim_password = "Passwords do not match.";
    }
    if (!formData.name && !isLoginView) {
      newErrors.name = "Name is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // -----loading
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async () => {
    setIsLoading(true);
    if (!validateForm()) {
      setIsLoading(false); // लोडर बंद करें यदि फॉर्म वैध नहीं है
      toast.error("Please correct the errors in the form.");
      return;
    }
    try {
      const response = await axios.post(`${baseUrl}/student/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confrim_password: formData.confrim_password,
      });
      if (response.status === 201 || response.status === 200) {
        setUser({
          name: formData.name,
          email: formData.email,
        });

        localStorage.setItem(
          "user",
          JSON.stringify({ name: formData.name, email: formData.email })
        );
        setShowSuccessModal(true);
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message || error.response.data || error.response
        );
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const validateLoginForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Please enter your password";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    if (!validateLoginForm()) {
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios.post(`${baseUrl}/student/login`, {
        email: formData.email,
        password: formData.password,
      });
      const { name, email } = response.data.data;
      localStorage.setItem("StudentToken", response.data.Token);
      localStorage.setItem("studentId", response.data.data._id);
      if (response.status === 201 || response.status === 200) {
        setUser({
          name: name,
          email: email,
        });

        localStorage.setItem(
          "user",
          JSON.stringify({ name: name, email: email })
        );
        setShowLoginSuccessModal(true);
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          error.response.data.message || error.response.data || error.response
        );
      }
    } finally {
      setIsLoading(false); // Stop loading
    }
  };
  
  const handleLogout = () => {
    setShowLogoutConfirm(true);
    navigate("/");
  };
  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    const loginModal = document.getElementById("login-modal");

    if (showSuccessModal) {
      mainContent.classList.add("blur-background");
      if (loginModal) loginModal.classList.add("blur-background");
    } else {
      mainContent.classList.remove("blur-background");
      if (loginModal) loginModal.classList.remove("blur-background");
    }
  });

  const handleShow = () => setShowOffcanvas(true);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    setIsLoginView(true);
    openLoginModal();
  };
  const closeloginSuccessModal = () => {
    setShowLoginSuccessModal(false); //login success model
    closeLoginModal();
    navigate("/Dashboard");
    localStorage.setItem("Role", "Student");
  };
  // -------------------------------------logout popup--------------------------------
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // ----------------------------become instuctore--------------------
  const handleclick = () => {
    if (showOffcanvas) {
      handleClose();
    }
    navigate("/Instuctorsignup");
  };
  // --------------------------------------auto close toogle offcanvas----------------------
  const handleClose = () => setShowOffcanvas(false);
  const handleNavItemClick = () => {
    if (showOffcanvas) {
      handleClose();
    }
  };
  // ---------------------------difrent css header-------------
  const [profilePicture, setProfilePicture] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("userProfile");
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfile(parsedProfile);
      setProfilePicture(parsedProfile.profile_picture || null);
    }
  }, []);
  return (
    <div id="main-content">
      <header className="top-0 left-0 z-[9] bg-transparent fixed-top">
        <div className="container">
          <Navbar
            expand="lg"
            className="mx-auto flex items-center justify-between p-6 lg:px-8"
          >
            <Navbar.Brand href="#home" className="flex flex-1">
              <h5 className="logo">martial arts hub.</h5>
              {/* <img
                src={logo}
                alt="Logo"
                className="logo font-extrabold text-lg"
              /> */}
            </Navbar.Brand>
            <button
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden logout-toogler-btn"
              onClick={handleShow}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* Desktop Navigation */}
            <div style={{ display: "flex" }}>
              <div className="destop-header hidden lg:flex">
                <nav
                  className="navbaratag flex flex-row items-center"
                  style={{ display: "flex" }}
                >
                  {text.map((item, index) => {
                    const currentPath = location.pathname;
                    const currentSearch = location.search;

                    // Match the base path and query parameters
                    const isActive =
                      currentPath === item.url.split("?")[0] &&
                      (item.url.includes("?section=")
                        ? currentSearch === `?${item.url.split("?")[1]}`
                        : currentSearch === "" &&
                          !item.url.includes("?section="));

                    return (
                      <Link
                        key={index}
                        to={item.url}
                        className={`nav-link ${isActive ? "active" : ""}`}
                        onClick={handleNavItemClick}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
              <div className="ml-4 Become2">
                {!user ? (
                  <>
                    <button
                      className="badge rounded-pill Become1"
                      onClick={handleclick}
                    >
                      Become an Instructor
                    </button>
                    <button
                      className="badge rounded-pill Login text-sm border border-black rounded-full py-[5px] px-[13px]"
                      onClick={openLoginModal}
                    >
                      Login
                    </button>
                  </>
                ) : null}
              </div>
              <div className="flex items-center logout-toogler">
                {/* Toggler button */}

                {/* Profile Dropdown */}
                {user && (
                  <Dropdown align="end" className="ml-3">
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="rounded-circle"
                    >
                      {profilePicture ? (
                        <img
                          src={profilePicture}
                          alt="Profile"
                          style={{
                            width: "30px",
                            height: "30px",
                            border: "1px solid black",
                            borderRadius: "50%",
                            // marginLeft: "35px",
                            // ------------
                            marginLeft: "0",
                          }}
                        />
                      ) : (
                        <span>{user.email.charAt(0).toUpperCase()}</span>
                      )}
                      {/* {user.email.charAt(0).toUpperCase()} */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {localStorage.getItem("Role") === "Student"
                        ? dropdownItems.map((item, index) => (
                            <Dropdown.Item
                              key={index}
                              onClick={() => navigate(item.url)}
                              className={`nav-link ${
                                location.pathname === item.url ? "active" : ""
                              }`}
                            >
                              {item.name}
                            </Dropdown.Item>
                          ))
                        : localStorage.getItem("Role") === "Instructor"
                        ? dropdownItemsIns.map((item, index) => (
                            <Dropdown.Item
                              key={index}
                              onClick={() => navigate(item.url)}
                              className={`nav-link ${
                                location.pathname === item.url ? "active" : ""
                              }`}
                            >
                              {item.name}
                            </Dropdown.Item>
                          ))
                        : null}
                      <Dropdown.Item
                        onClick={handleLogout}
                        style={{ padding: "0" }}
                      >
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </div>
            </div>

            {/* Offcanvas Menu */}
            <Offcanvas
              show={showOffcanvas}
              onHide={handleClose}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Navbar.Brand href="/" className="flex flex-1">
                    <h5>martial arts hub.</h5>
                    {/* <img
                      src={logo}
                      alt="Logo"
                      className="logo font-extrabold text-lg"
                    /> */}
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="navbaratag flex flex-col sm:flex-row items-center w-full lg:w-auto">
                  {text.map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      className={`nav-link ${
                        location.pathname === item.url ? "active" : ""
                      }`}
                      onClick={handleNavItemClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </Nav>
                <div className="line-hr"></div>
                <div className="flex items-center">
                  {!user ? (
                    <>
                      <button
                        className="badge rounded-pill Login Login2 "
                        onClick={openLoginModal}
                      >
                        Login
                      </button>
                      <button
                        className="badge rounded-pill  become-instructor"
                        onClick={handleclick}
                      >
                        Become an Instructor
                      </button>
                    </>
                  ) : null}
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Navbar>
        </div>

        {/* Login Modal */}
        <Modal
          show={showLoginModal}
          onHide={closeLoginModal}
          centered
          id="login-modal"
        >
          <Modal.Body>
            <div className="popup">
              <div className="popup1">
                <div className="popup2">
                  <div className="welcome1">
                    <img
                      src={isLoginView ? img19 : img20}
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

                  <div className="form-login">
                    <Modal.Header closeButton />
                    <FaArrowLeft className="form-arrow" />
                    {isLoginView ? (
                      <>
                        <h2 style={{ marginTop: "10px" }}>
                          Welcome Back! Ready to Learn?
                        </h2>
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
                          <div style={{ marginTop: "10px" }}>
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
                                // maxLength={6}
                              />
                              <img
                                src={isPasswordVisible ? eye : eyeslash}
                                alt="toggle visibility"
                                onClick={togglePasswordVisibility}
                                className="eye"
                                id="togglePassword"
                                style={{ cursor: "pointer", marginLeft: "8px" }}
                              />
                            </div>
                            {errors.password && (
                              <p className="error">{errors.password}</p>
                            )}
                          </div>
                        </form>
                        <div className="tobtn" style={{ marginTop: "50px" }}>
                          <button
                            type="button"
                            onClick={handleLogin}
                            className="account rounded-pill"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <div
                                className="spinner-border text-light"
                                role="status"
                                style={{ width: "1rem", height: "1rem" }}
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              "Log In to your account"
                            )}
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
                            <label className="label-email">Name</label>
                            <div className="email-login1">
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="rounded-pill"
                                placeholder="Full Name"
                              />
                            </div>
                            {errors.name && (
                              <p className="error">{errors.name}</p>
                            )}
                          </div>
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
                                // maxLength={6}
                              />
                              <img
                                src={isPasswordVisible ? eye : eyeslash}
                                alt="toggle visibility"
                                onClick={togglePasswordVisibility}
                                className="eye"
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
                                name="confrim_password"
                                value={formData.confrim_password}
                                onChange={handleInputChange}
                                className="rounded-pill"
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Confirm Password"
                                // maxLength={6}
                              />
                              <img
                                src={isPasswordVisible ? eye : eyeslash}
                                alt="toggle visibility"
                                onClick={togglePasswordVisibility}
                                className="eye"
                                id="togglePassword"
                                style={{ cursor: "pointer", marginLeft: "8px" }}
                              />
                            </div>
                            {errors.confrim_password && (
                              <p className="error">{errors.confrim_password}</p>
                            )}
                          </div>
                        </form>
                        <div className="tobtn">
                          <button
                            type="button"
                            onClick={handleCreateAccount}
                            className="account rounded-pill"
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <div
                                className="spinner-border text-light"
                                role="status"
                                style={{ width: "1rem", height: "1rem" }}
                              >
                                <span className="visually-hidden">
                                  Loading...
                                </span>
                              </div>
                            ) : (
                              "Create Account"
                            )}
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
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        {/* signup Success Modal */}
        <Modal
          show={showSuccessModal}
          onHide={closeSuccessModal}
          centered
          dialogClassName="custom-modal"
          backdrop="static"
        >
          <Modal.Body className="text-center success-modal">
            {/* <FaCheckCircle className="check" /> */}
            <div className="popup-checkmark2">
              <div className="popup-checkmark1">
                <div className="popup-checkmark">
                  <FaCheck />
                </div>
              </div>
            </div>
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
        {/* -------------------------------------------login successfully--------------------- */}
        <Modal
          show={showLoginSuccessModal}
          onHide={closeloginSuccessModal}
          centered
          dialogClassName="custom-modal"
          backdrop="static" //not close popup clickon close popup
        >
          <Modal.Body className="text-center success-modal">
            {/* <FaCheckCircle className="check" /> */}
            <div className="popup-checkmark2">
              <div className="popup-checkmark1">
                <div className="popup-checkmark">
                  <FaCheck />
                </div>
              </div>
            </div>
            <h4>Success!</h4>
            <p className="check-p">
              You have successfully logged in to your martial arts hub student
              account. Thank you for joining us again. explore new courses, talk
              with instructors and join your favourite classes!
            </p>
            <button
              type="button"
              onClick={closeloginSuccessModal}
              className="okay rounded-pill"
            >
              Okay, Thanks!
            </button>
          </Modal.Body>
        </Modal>
        {/* --------------------------------logout popup------------------------------------------------ */}
        <Modal
          show={showLogoutConfirm}
          onHide={() => setShowLogoutConfirm(false)}
          centered
          dialogClassName="custom-modal1"
        >
          <Modal.Body
            className="text-center areyou"
            style={{ borderRadius: "15px" }}
          >
            <div className="div3-warning">
              <div className="div2-warning">
                <div className="div-warning">
                  <TiWarning className="warning" />
                </div>
              </div>
            </div>
            <h4>Are you sure?</h4>
            <p>
              Are you sure you want to log out from your{" "}
              <span style={{ fontWeight: "800", color: "#9b9191" }}>
                martial arts hub
              </span>{" "}
              account?
            </p>
            <div className="mt-4 goback">
              <button
                type="button"
                onClick={() => {
                  setUser(null);
                  localStorage.removeItem("user");
                  setShowLogoutConfirm(false); // Close modal after logout
                  window.location.reload();
                }}
                className="logout-btn rounded-pill"
              >
                Logout
              </button>
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)} // Close modal without action
                className="rounded-pill goback-btn"
              >
                Go Back
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </header>
      <ToastContainer />
    </div>
  );
}

export default Mainnavbar;
