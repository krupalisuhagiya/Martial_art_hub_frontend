import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoCamera, IoShareSocialSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./CommanProfile.css";
import { Modal } from "react-bootstrap";
import baseUrl from "../../../../baseUrl";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function CommanProfileColSecond() {
  const token = localStorage.getItem("StudentToken");
  const studentId = localStorage.getItem("studentId");

  const [user, setUser] = useState({ email: "", name: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    profile_picture: null,
    aboutMe: "",
    additionlDetail: "",
  });

  const [error, setError] = useState("");
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setFormData({ ...formData, profile_picture: base64Image });
        setProfilePicture(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const validateform = () => {
    const newErrors = {};
    if (!formData.aboutMe) newErrors.aboutMe = "aboutMe is required.";
    if (!formData.additionlDetail)
      newErrors.additionlDetail = "aboutMe is required.";
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateform()) return;

    const body = new FormData();
    body.append("name", formData.name);
    body.append("profile_picture", formData.profile_picture);
    body.append("aboutMe", formData.aboutMe);
    body.append("additionlDetail", formData.additionlDetail);
    body.append("studentId", studentId);

    try {
      const response = await axios.put(
        `${baseUrl}/student/profile/update`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedProfile = {
          name: formData.name,
          aboutMe: formData.aboutMe,
          additionlDetail: formData.additionlDetail,
          profile_picture: profilePicture, // Use the preview URL for local storage
        };

        localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
        toast.success("Profile updated successfully!");
        setIsModalOpen(false);
      }
      window.location.reload();
    } catch (error) {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  
  return (
    <div>
      <div className="studentprofile_mainpart">
        <div>
          <h2>
            {user.name || "No Name Found"}
            <span className="student_profile_namespan">(Student)</span>
          </h2>
          <div className="studentprofile_complete">
            <div className="studentprofile_complete_75">75%</div>
          </div>
          <p>
            Your profile is incomplete.
            <Link
              style={{ color: "#CB3530" }}
              onClick={() => setIsModalOpen(true)}
            >
              Complete Now
            </Link>
          </p>
        </div>
        <div className="instuctor_profile_button" id="instuctor_profile_button">
          <button
            className="instuctor_profile_edit"
            style={{ border: "1px solid black" }}
            onClick={() => setIsModalOpen(true)}
          >
            <CiEdit /> Edit
          </button>
          <button className="instuctor_profile_share">
            <IoShareSocialSharp /> Share
          </button>
        </div>
      </div>
      <Modal
        show={isModalOpen}
        onHide={() => setIsModalOpen(false)}
        // backdrop="static" // Prevent closing by clicking outside
      >
        <Modal.Body>
          <div className="student_profile_information">
            <div className="student_profile_information_div1">
              <div className="myprofile-informatino" id="myprofile-informatino">
                <div className="myprofile1">
                  <h1>Add Information!</h1>
                  <p>
                    Please fill below details to create your profile in
                    <span>martial arts hub</span> as an Instructor!
                  </p>
                  <div className="myprofile-name">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={user.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="myprofile2" id="myprofile2">
                  <div className="myprofile-icon">
                    <IoCamera className="myprofile-camera" />
                    <p>Add Profile Picture</p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="profile-picture"
                    name="profile_picture"
                    onChange={handleFileChange}
                  />
                  {profilePicture && (
                    <img
                      src={profilePicture}
                      alt="Profile Preview"
                      className="profile-picture-preview"
                    />
                  )}
                </div>
              </div>
              <div className="myprofile-informatino0">
                <div>
                  <label className="my-email-label">About Me</label>
                  <textarea
                    className="my-email"
                    id="student_profile_add_about"
                    name="aboutMe" // Changed to match the formData key
                    value={formData.aboutMe || ""} // Properly bind the value to formData
                    onChange={handleInputChange} // Ensure it updates formData
                  />
                  {error.aboutMe && <p className="error">{error.aboutMe}</p>}
                </div>
                <div className="student_profile_add_details">
                  <label className="my-mobile-no-label">
                    Additional Details
                  </label>
                  <textarea
                    className="my-number"
                    id="student_profile_add_about"
                    name="additionlDetail"
                    value={formData.additionlDetail || ""}
                    onChange={handleInputChange}
                  />
                  {error.additionlDetail && (
                    <p className="error">{error.additionlDetail}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button
              type="button"
              onClick={handleSubmit}
              className="okay save rounded-pill"
            >
              Save
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default CommanProfileColSecond;
