import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import classonlineimg14 from "../../../../image/14.png";
import "./Arbitration.css";

function Arbitration() {
  const navigate = useNavigate();
  const negotiationClick = () => {
    navigate("/Negotiation");
  };
  const [user, setUser] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser.name);
      } catch (error) {
        setUser(storedUser);
      }
    }
  }, []);

  // -------------
  useEffect(() => {
    setMessages([
      {
        type: "send",
        msg: "Hello! I want to know about Brazilian Jiu Jitsu. In how much time I will learn it?",
        user: user,
        time: "July 23, 2024 at 05:43 IST",
      },
      {
        type: "receive",
        msg: "Yes, sure! This course, Learning Brazilian Jiu Jitsu, varies for each person. On average, it takes several months to a few years to become proficient.",
        user: "Admin",
        time: "July 23, 2024 at 05:55 IST",
      },
    ]);
  }, [user]);

  const handleSendMessage = () => {
    const inputElement = document.getElementById("writemessage");
    const message = inputElement.value.trim();
    if (message) {
      const currentTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      // Add user message
      setMessages((prev) => [
        ...prev,
        {
          type: "send",
          msg: message,
          user: user,
          time: `User ${currentTime}`,
        },
      ]);

      // Add a simulated response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "receive",
            msg: "Thanks for your question! We will get back to you with more details shortly.",
            user: "Admin",
            time: `Admin ${currentTime}`,
          },
        ]);
      }, 1000); // Simulated response delay

      inputElement.value = ""; // Clear input field
    }
  };

  const negotiationpayment = [
    {
      total: "5.99",
      student_receive: "5.99",
      instructor_pay: "0.00",
      result: "Closed on 04 Aug 2024",
    },
  ];

  return (
    <div>
      <div className="student_negotiation_container">
        <div>
          <div className="new-dispute">
            <h4>
              <span>
                <HiOutlineArrowLeft
                  style={{ marginRight: "10px" }}
                  onClick={negotiationClick}
                />
              </span>
              New Dispute
            </h4>
          </div>
          <div className="stages-container">
            <div className="stage stage1" id="stage1">
              <p className="stage-title">--: STAGE 1 :--</p>
              <p className="stage-text">IDENTIFY THE ISSUE</p>
            </div>
            <div className="circle_right" id="arbitration_circle_right">
              <FaArrowAltCircleRight />
            </div>

            {/* Stage 2 */}
            <div className="stage stage2" id="stage1">
              <p className="stage-title">--: STAGE 2 :--</p>
              <p className="stage-text">NEGOTIATION</p>
            </div>
            <div className="circle_right" id="circle_right">
              <FaArrowAltCircleRight />
            </div>

            {/* Stage 3 */}
            <div className="stage stage3" id="stage2">
              <p className="stage-title">--: STAGE 3 :--</p>
              <p className="stage-text">ARBITRATION</p>
            </div>
          </div>
        </div>
        <div className="student_stage_2">
          <h6>Stage 2 - Negotiation</h6>
          <p>
            At this stage, students and instructors can discuss about the
            dispute, admin will give the final solution.
          </p>
        </div>
        <div className="student_negotiation_class">
          <div>
            <h6>
              Class Name:<span> Brazilian Jiu Jitsu</span>
            </h6>
          </div>
          <div>
            <h6>
              Dispute:<span> Emily Roberts vs Keyn Mojho</span>
            </h6>
          </div>
          <div>
            <h6>
              Dispute type:<span> Class Issue</span>
            </h6>
          </div>
        </div>
        <div className="student_stage2_chatmain">
          <div className="row">
            <div className="col-lg-9 student_stage2_chat">
              <div className="student_stage2_chat1">
                {messages.map((message, index) => (
                  <div key={index}>
                    {message.type === "send" ? (
                      <div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "end",
                          }}
                        >
                          <p className="send-msg0" id="send-msg0">
                            {message.msg}
                          </p>
                          <span className="chatimg">
                            {user && /^[A-Za-z]/.test(user)
                              ? user.charAt(0).toUpperCase()
                              : ""}
                          </span>
                        </div>
                        <p className="student_stage2_chat_time">
                          {message.time}
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="receivechat" id="receivechat">
                          {message.user === "Admin" ? (
                            <img src={classonlineimg14} alt="Admin" />
                          ) : null}
                          <p>{message.msg}</p>
                        </div>
                        <p className="student_stage2_chattime">
                          {message.time}
                        </p>
                      </div>
                    )}
                    {/* <div className="type-check student_type_time">
                      <p
                        className={
                          message.type === "send"
                            ? "send-time"
                            : "receivechat-time"
                        }
                      ></p>
                    </div> */}
                  </div>
                ))}
              </div>

              <div className="student_stage2_send-message">
                <p>Dispute Closed by admin on 04 Aug 2024. Solution given by admin will be shown here.</p>
              </div>
            </div>
            <div className="col-lg-3 student_stage2_invoice1">
              <div className="student_stage2_invoice">
                {negotiationpayment.map((amount, invoic) => (
                  <div key={invoic}>
                    <div
                      className="student_stage2_invoice_div"
                      id="student_stage2_invoice_div"
                    >
                      <p style={{ color: "#6B6B6B", fontWeight: "500" }}>
                        Total Disputed Amount:
                      </p>
                      <h5 style={{ color: "#CB3530", fontWeight: "700" }}>
                        ${amount.total}
                      </h5>
                    </div>
                    <div
                      className="student_stage2_invoice_div"
                      style={{ marginTop: "20px" }}
                    >
                      <p style={{ color: "#6B6B6B", fontSize: "14px" }}>
                        Student (You) wants to receive:
                      </p>
                      <h6 style={{ color: "#CB3530" }}>
                        ${amount.student_receive}
                      </h6>
                    </div>
                    <div
                      className="student_stage2_invoice_div"
                      id="student_stage2_invoice_div"
                    >
                      <p style={{ color: "#6B6B6B", fontSize: "14px" }}>
                        Instructor (Keyn mojho) wants to pay:
                      </p>
                      <h6 style={{ color: "#CB3530" }}>
                        ${amount.instructor_pay}
                      </h6>
                    </div>
                    <div className="student_stage2_result" id="student_stage2_result">
                      <h6>Result:</h6>
                      <p>{amount.result}</p>
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

export default Arbitration;
