import React, { useState } from "react";
import "./MyProfile.css";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoCamera } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import Footer from "../../../comman/Footer";
import { Modal } from "react-bootstrap";
import axios from "axios";
import baseUrl from "../../../../baseUrl";

function MyProfile() {
  const navigate = useNavigate();

  // Navigation to instructor signup
  const navigateToInstructorSignup = () => {
    navigate("/Instuctorsignup");
  };

  // State declarations
  const [profilePicture, setProfilePicture] = useState(null);
  const [idProofFile, setIdProofFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    profilePicture: "",
    idProofFile: "",
    availability: "",
    bio: "",
    tagline: "",
    experience: "",
    trainingHistory: "",
    certifications: "",
    keywords: "",
    hourlyRates: "",
    freeSessionType: "",
    privateLessonType: "",
    privateHourlyRates: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // File change handlers
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    if (name === "profile_picture" && files.length > 0) {
      const file = files[0];
      setProfilePicture(file);
      setFormData({ ...formData, imagePreview: URL.createObjectURL(file) });
    }
  };

  const handleIdProofChange = (event) => {
    const file = event.target.files[0];
    setIdProofFile(file);
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on change
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    // if (!formData.profilePicture)
    //   newErrors.profilePicture = "profilePicture is required.";
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";
    if (!formData.availability)
      newErrors.availability = "Availability date is required.";
    if (!formData.bio) newErrors.bio = "Bio is required.";
    if (!formData.tagline) newErrors.tagline = "Tagline is required.";
    if (!formData.experience) newErrors.experience = "Experience is required.";
    if (!formData.trainingHistory)
      newErrors.trainingHistory = "Training history is required.";
    if (!formData.certifications)
      newErrors.certifications = "Certifications are required.";
    if (!formData.keywords) newErrors.keywords = "Keywords are required.";
    if (!formData.hourlyRates || isNaN(formData.hourlyRates))
      newErrors.hourlyRates = "Hourly rate must be a valid number.";
    if (!formData.freeSessionType)
      newErrors.freeSessionType = "Session type is required.";
    if (!formData.privateLessonType)
      newErrors.privateLessonType = "Private session type is required.";
    if (!formData.privateHourlyRates || isNaN(formData.privateHourlyRates))
      newErrors.privateHourlyRates = "Private lesson rate must be a number.";
    if (!idProofFile) newErrors.idProof = "ID proof is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(`${baseUrl}/instructor/profile/update`,{
            name: formData.name,
            email: formData.email,
            mobile_No: formData.mobile,
            add_availability: formData.availability,
            add_bio: formData.bio,
            add_tagline: formData.tagline,
            experience: formData.experience,
            history: formData.trainingHistory,
            certifications: formData.certifications,
            keywords: formData.keywords,
            first_session: formData.hourlyRates,
            frist_classType: formData.freeSessionType,
            private_classType: formData.privateLessonType,
            private_session: formData.privateHourlyRates,
            idproof: formData.idProofFile,
            profile_picture: formData.profilePicture,
          }
        );

        if (response.status === 201 || response.status === 200) {
          setShowSuccessModal(true);
        }
      } catch (error) {
        setErrors({
          submit:
            error.response?.data.message ||
            "Error submitting the form. Please try again.",
        });
      }
    }
  };

  // Success modal close
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <div className="myprofile">
        <FaArrowLeft onClick={navigateToInstructorSignup} />
        <form onSubmit={handleSubmit}>
          <div className="myprofile-informatino">
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
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
            </div>
            <div className="myprofile2">
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
              {formData.imagePreview && (
                <img
                  src={formData.imagePreview}
                  alt="Profile Preview"
                  className="profile_image"
                />
              )}
            </div>
          </div>
          <div className="myprofile-informatino0">
            <div>
              <label className="my-email-label">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="my-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <label className="my-mobile-no-label">Mobile No.</label>
              <input
                type="number"
                className="my-number"
                placeholder="Mobile No."
                name="mobile"
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
            </div>
            <div className="availability">
              <label>Add Availability</label>
              <input
                type="date"
                className="availability-input"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              />
              {errors.availability && (
                <span className="error">{errors.availability}</span>
              )}
            </div>
            <div className="availability">
              <label>Add Bio</label>
              <textarea
                placeholder="Write about you"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />
              {errors.bio && <span className="error">{errors.bio}</span>}
            </div>
            <div className="availability">
              <label className="tagline">Add tagline</label>
              <input
                type="text"
                placeholder="Add tagline"
                className="my-tagline"
                name="tagline" // Ensure no leading or trailing spaces
                value={formData.tagline}
                onChange={handleChange}
              />
              {errors.tagline && (
                <span className="error">{errors.tagline}</span>
              )}
            </div>
            <div className="availability">
              <label className="experience">Add your Experience</label>
              <textarea
                placeholder="Add experience here"
                className="experience-textarea"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
              {errors.experience && (
                <span className="error">{errors.experience}</span>
              )}
            </div>
            <div>
              <label className="my-training">Add Training History</label>
              <textarea
                placeholder="Add Training History"
                className="my-training-textarea"
                name="trainingHistory"
                value={formData.trainingHistory}
                onChange={handleChange}
              />
              {errors.trainingHistory && (
                <span className="error">{errors.trainingHistory}</span>
              )}
            </div>
            <div>
              <label className="certifications">Add your Certifications</label>
              <textarea
                placeholder="Add your Certifications"
                className="my-certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
              />
              {errors.certifications && (
                <span className="error">{errors.certifications}</span>
              )}
            </div>
            <div className="availability">
              <label className="keywords">Add Keywords</label>
              <input
                placeholder="Add Keywords"
                className="keywords-textarea"
                name="keywords"
                value={formData.keywords}
                onChange={handleChange}
              />
              {errors.keywords && (
                <span className="error">{errors.keywords}</span>
              )}
            </div>
            <div className="availability">
              <label className="my-proof">
                Upload ID Proof (Aadhar Card/Driving License/Instructor
                Certificate)
              </label>
              <div className="upload-proof">
                <div className="upload-icon">
                  <MdCloudUpload className="upload-icon1" />
                  <p>
                    Upload ID Proof (Aadhar Card/Driving License/Instructor
                    Certificate) here
                  </p>
                </div>
                <input
                  type="file"
                  className="upload-file"
                  onChange={handleIdProofChange}
                />
                {idProofFile && <p>File uploaded: {idProofFile.name}</p>}
                {errors.idProof && (
                  <span className="error">{errors.idProof}</span>
                )}
              </div>
            </div>
          </div>
          <div className="rates">
            <h2>Hourly Rates</h2>
            <div>
              <label className="free-rates-label">
                Do you want to give first free session?
              </label>
              <input
                type="number"
                placeholder="Add hourly rates here"
                className="free-rates-input"
                name="hourlyRates"
                value={formData.hourlyRates}
                onChange={handleChange}
              />
              {errors.hourlyRates && (
                <span className="error">{errors.hourlyRates}</span>
              )}
            </div>
            <div>
              <label className="free-type-label">
                Class Type for first free session (Online/Face-to-Face/Both)
              </label>
              <input
                type="text"
                placeholder="eg. Online"
                className="free-type-input"
                name="freeSessionType"
                value={formData.freeSessionType}
                onChange={handleChange}
              />
              {errors.freeSessionType && (
                <span className="error">{errors.freeSessionType}</span>
              )}
            </div>
            <div>
              <label className="private-type-label">
                Class Type for Private Lesson (1-on-1)
                (Online/Face-to-Face/Both)
              </label>
              <input
                type="text"
                placeholder="eg. Online"
                className="private-type-input"
                name="privateLessonType"
                value={formData.privateLessonType}
                onChange={handleChange}
              />
              {errors.privateLessonType && (
                <span className="error">{errors.privateLessonType}</span>
              )}
            </div>
            <div>
              <label className="private-rates-label">
                Do you want to give first free session?
              </label>
              <input
                type="number"
                placeholder="Add hourly rates here"
                className="private-rate-input"
                name="privateHourlyRates"
                value={formData.privateHourlyRates}
                onChange={handleChange}
              />
              {errors.privateHourlyRates && (
                <span className="error">{errors.privateHourlyRates}</span>
              )}
            </div>
          </div>
          <div className="last-profile-div">
            <button
              type="submit"
              className="create-profile"
              onClick={handleSubmit}
            >
              Save Info & Create Profile
            </button>
          </div>
        </form>
      </div>
      <Modal
        show={showSuccessModal}
        centered
        onHide={closeSuccessModal}
        dialogClassName="custom-modal"
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

          <h4>Profile Activated!</h4>
          <p className="check-p">
            You're Ready to Go! Instructor Profile Successfully Created. Start
            Crafting Classes, Educating Students, and Spreading Your Knowledge!
          </p>
          <button
            type="button"
            onClick={closeSuccessModal}
            className="okay rounded-pill"
          >
            Okay!
          </button>
        </Modal.Body>
      </Modal>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default MyProfile;
