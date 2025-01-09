import React, { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "./Negotiation.css";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import classonlineimg14 from "../../../../image/14.png";
import baseUrl from "../../../../baseUrl";
import socket from "../../../../components/Socket";
import axios from "axios";

function Negotiation() {
  const navigate = useNavigate();
  const negotiationClick = () => {
    navigate("/DisputeStage1");
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
  }, [messages]);
  // -----------last message auto scrool
  const lastMessageRef = useRef(null);
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // ----------------------socket-------------
  const { roomid } = useParams();
  const [message, setmessage] = useState("");
  const [chatmessage, setchatmessage] = useState([]);
  console.log(chatmessage, "===========>");

  useEffect(() => {
    const fetchChat = async () => {
      try {
        const response = await axios.get(`${baseUrl}/chat/data/student/admin`);
        setchatmessage(response.data); // Assuming `response.data` contains the desired data
        console.log(response.data, "===========>");
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      }
    };

    fetchChat();
  }, []);

  const handleSendMessage = () => {
    socket.emit("Enterchat", {
      message: message,
      sender: "instructor",
      time: new Date(),
      roomid,
    });
    setmessage("");
  };

  useEffect(() => {
    socket.emit("joinRoom", roomid);

    socket.on("getchatData", (data) => {
      console.log(data, "instr");

      setchatmessage((prev) => [...prev, data]);
    });

    return () => {
      socket.off("getchatData");
    };
  }, []);
  // ---------------------------------------------
  const negotiationpayment = [
    {
      total: "5.99",
      student_receive: "5.99",
      instructor_pay: "0.00",
      result: "Ongoing",
    },
  ];

  // ----------------

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
            <div className="circle_right" id="circle_right">
              <FaArrowAltCircleRight />
            </div>

            {/* Stage 2 */}
            <div className="stage stage2" id="stage2">
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
        </div>
        <div className="student_stage_2">
          <h6>Stage 2 - Negotiation</h6>
          <p>
            At this stage, students and instructors can discuss about the
            dispute, and the Admin can monitor and provide input.
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
              {/* <div className="student_stage2_chat1">
                {chatmessage.map((message, index) => (
                  <div style={{marginBottom:"10px"}}
                    key={index}
                    ref={index === messages.length - 1 ? lastMessageRef : null}
                  >
                    {message.type === "send" ? (
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <p className="send-msg0" id="send-msg0">
                          {message.message}
                        </p>
                        <span className="chatimg">
                          {user && /^[A-Za-z]/.test(user)
                            ? user.charAt(0).toUpperCase()
                            : ""}
                        </span>
                      </div>
                      <p className="student_stage2_chat_time">{message.time}</p>
                    </div>
                    ) : ( 
                  <div>
                        <div className="receivechat" id="receivechat">
                          {message.user === "Admin" ? (
                            <img src={classonlineimg14} alt="Admin" />
                          ) : null}
                          <p>{message.message}</p>
                        </div>
                        <p className="student_stage2_chattime">
                          {message.time}
                        </p>
                      </div>
                     )} 
                    <div className="type-check student_type_time">
                      <p
                        className={
                          message.type === "send"
                            ? "send-time"
                            : "receivechat-time"
                        }
                      ></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="send-message">
                <div className="input-container" id="input-container">
                  <input
                    className="writemessage"
                    id="writemessage"
                    type="email"
                    placeholder="Write your message here"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
                  <button
                    className="student_stage2_send"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </div> */}
              <div>
                <h3>Instructor</h3>
                <input
                  type="text"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
                <div>
                  {chatmessage.map((item, index) => {
                    return (
                      <div>
                        <span>{index}</span>
                        <span>====</span>
                        <span>{item.message}</span>
                        <span>====</span>
                        <span>{item.sender}</span>.<span>====</span>
                        <span>{item.time}</span>
                      </div>
                    );
                  })}
                </div>
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
                    <div className="student_stage2_result">
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

export default Negotiation;
