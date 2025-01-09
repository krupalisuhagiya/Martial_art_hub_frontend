import React, { useEffect, useState } from "react";
import socket from "../../Socket";
// import { useParams } from "react-router-dom";
import baseUrl from "../../../baseUrl";
import axios from "axios";

function Admin() {
  // const { roomid } = useParams();
  const [message, setmessage] = useState("");
  const [chatmessage, setchatmessage] = useState([]);

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

  const handleSendUser2 = () => {
    socket.emit("Enterchat", {
      message: message,
      sender: "student",
      time: new Date(),
      // roomid,
    });
    setmessage("");
  };

  useEffect(() => {
    socket.emit("joinRoom");

    socket.on("getchatData", (data) => {
      console.log(data, "stude");
      setchatmessage((prev) => [...prev, data]);
    });

    return () => {
      socket.off("getchatData");
    };
  }, []);

  return (
    <div style={{ paddingTop: "100px" }}>
      <div>
        <h3>Student</h3>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button onClick={handleSendUser2}>Send</button>
        <div>
          {chatmessage.map((item, index) => {
            return (
              <div>
                <span>{index}</span>
                <span>====</span>
                <span>{item.message || item.message}</span>
                <span>====</span>
                <span>{item.sender || item.senderType}</span>.<span>====</span>
                <span>{item.time || item.time}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Admin;
