import React, { useState } from "react";
import "./DisputeStage1.css";
import { FaArrowAltCircleRight, FaCheck } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { BsCloudUploadFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function DisputeStage1() {
  const [formData, setFormData] = useState({
    disputeType: "",
    instructor: "",
    className: "",
    issueDescription: "",
    evidence: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.disputeType)
      newErrors.disputeType = "Dispute type is required.";
    if (!formData.instructor) newErrors.instructor = "Instructor is required.";
    if (!formData.className) newErrors.className = "Class name is required.";
    if (!formData.issueDescription)
      newErrors.issueDescription = "Issue description is required.";
    if (!formData.evidence) newErrors.evidence = "Evidence is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form or handle successful validation
      console.log("Form submitted successfully", formData);
      // ------popup----
      setShowPopup(true);
    }
  };
  // -----------------------popup ----------------------
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const closePopup = () => {
    setShowPopup(false); // Close popup
    navigate("/Negotiation");
  };

  return (
    <div>
      <div className="stage-container">
        <div className="new-dispute">
          <h4>New Dispute</h4>
        </div>
        <div className="stages-container">
          <div className="stage stage1">
            <p className="stage-title">--: STAGE 1 :--</p>
            <p className="stage-text">IDENTIFY THE ISSUE</p>
          </div>
          <div className="circle_right">
            <FaArrowAltCircleRight />
          </div>

          {/* Stage 2 */}
          <div className="stage stage2">
            <p className="stage-title">--: STAGE 2 :--</p>
            <p className="stage-text">NEGOTIATION</p>
          </div>
          <div className="circle_right">
            <FaArrowAltCircleRight />
          </div>

          {/* Stage 3 */}
          <div className="stage stage3">
            <p className="stage-title">--: STAGE 3 :--</p>
            <p className="stage-text">ARBITRATION</p>
          </div>
        </div>
        <div className="student_identify_issue">
          <div className="student_identify_issue_stage_1">
            <h5>Stage 1 - Identify the issue</h5>
          </div>
          <div className="student_identify_issue_div">
            <p>
              <RiVerifiedBadgeFill className="student_stage_verified" />
              <span>Review Transaction Details:</span> Check the transaction or
              service in question for any discrepancies or issues.
            </p>
            <p>
              <RiVerifiedBadgeFill className="student_stage_verified" />
              <span>Gather Evidence:</span> Collect relevant documents,
              receipts, screenshots, or any other evidence that supports your
              claim.
            </p>
            <p>
              <RiVerifiedBadgeFill className="student_stage_verified" />
              <span>Describe the Problem:</span> Clearly outline the issue,
              including dates, amounts, and specific problems encountered.
            </p>
            <p>
              <RiVerifiedBadgeFill className="student_stage_verified" />
              <span>Submit the Form: </span>Complete the "Raise Dispute" form
              with all the gathered information and submit it for review.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="student_select_type_main">
            <div className="row">
              <div className="col-md-4 student_select_type">
                <h6>Select type of Dispute</h6>
                <input
                  type="rext"
                  placeholder="--Select--"
                  name="disputeType"
                  value={formData.disputeType}
                  onChange={handleChange}
                />
                {errors.disputeType && (
                  <p className="error">{errors.disputeType}</p>
                )}
              </div>
              <div className="col-md-4 student_select_type">
                <h6>Select Instructor to Dispute</h6>
                <input
                  type="rext"
                  placeholder="--Select--"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                />
                {errors.instructor && (
                  <p className="error">{errors.instructor}</p>
                )}
              </div>
              <div className="col-md-4 student_select_type">
                <h6>Select Class</h6>
                <input
                  type="rext"
                  placeholder="--Select--"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                />
                {errors.className && (
                  <p className="error">{errors.className}</p>
                )}
              </div>
            </div>
          </div>
          <div className="student_stage_document">
            <div className="row">
              <div className="col-md-6 student_stage_document_1">
                <h6>Please describe in detail about raising dispute</h6>
                <textarea
                  placeholder="Write Your issue here"
                  rows="8"
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleChange}
                />
                {errors.issueDescription && (
                  <p className="error">{errors.issueDescription}</p>
                )}
              </div>
              <div className="col-md-6">
                <h6>
                  Please add evidence(screenshots, documents, receipts) that
                  supports your claim.
                </h6>
                <div className="student_upload-container">
                  <input
                    type="file"
                    className="student_upload_input"
                    name="evidence"
                    onChange={handleChange}
                  />
                  <div className="student_upload_contant">
                    <p className="student_upload_icon">
                      <BsCloudUploadFill />
                    </p>
                    <p className="student_upload-text">
                      Upload screenshots, documents, receipts
                    </p>
                  </div>
                  {errors.evidence && (
                    <p className="error">{errors.evidence}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="student_stage_submit">
            <button type="submit">Submit Dispute</button>
          </div>
        </form>
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-container">
              <div className="popup-checkmark2">
                <div className="popup-checkmark1">
                  <div className="popup-checkmark">
                    <FaCheck />
                  </div>
                </div>
              </div>
              <h3>Dispute Raised!</h3>
              <p>
                Your dispute has been successfully submitted. Our team will
                review the details and contact you within 48 hours. Thank you
                for your patience and understanding.
              </p>
              <button onClick={closePopup} className="popup-button">
                Okay!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DisputeStage1;
