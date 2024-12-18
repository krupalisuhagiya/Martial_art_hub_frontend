import React, { useEffect, useState } from "react";
import Dashboard from "../../../comman/Dashboard";
import { IoCheckmarkDoneOutline, IoSearch } from "react-icons/io5";
import "./MyMessages.css";
import searchimg13 from "../../../../image/13.png";
import searchimg14 from "../../../../image/14.png";
import onlineimg14 from "../../../../image/14.png";
import { PiDotsThreeOutlineVerticalFill, PiShareNetwork } from "react-icons/pi";

function MyMessages() {
  const chatname = [
    {
      chatimg: searchimg13,
      name: "Jhon Martin",
      text: "Yes! I can help you with Yes! I can help you with Yes! I can help you with",
      time: "09:27 AM",
      message: 2,
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
      icon: <IoCheckmarkDoneOutline />,
      class: "iconnes",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },

    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
    {
      chatimg: searchimg14,
      name: "Kiya John",
      text: "Yes! I can help you with Yes! I can help you withYes! I can help you with",
      time: "10:00 AM",
    },
  ];
  const online_chat = [
    {
      img: onlineimg14,
      name: "Kiya John",
      area: "Brazilian Jiu Jitsu Instructor",
    },
  ];
  const chat_time = [
    {
      time: "28 July,2024",
    },
  ];
  const [user, setUser] = useState("");

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
  const send_message = [
    {
      msg: "Hello! I want to know about Brazilian Jiu Jitsu. In how much time i will learn it?",
      user: user,
      icon: <IoCheckmarkDoneOutline />,
      time: "09:10 AM",
    },
  ];
  const receive = [
    {
      msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
      user: onlineimg14,
      time: "09:27 AM",
    },
    {
      msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
      user: onlineimg14,
      time: "09:27 AM",
    },
    {
      msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
      user: onlineimg14,
      time: "09:27 AM",
    },
    {
      msg: "Yes, sure! This course Learning Brazilian Jiu Jitsu varies for each person. On average, it takes several months to a few years to become proficient.",
      user: onlineimg14,
      time: "09:27 AM",
    },
  ];

  return (
    <div>
      <Dashboard className="message-dashbord" />
      <div className="row" style={{ paddingTop: "150px" }}>
        <div className="col-lg-4 person">
          <div className="search-input">
            <input
              type="text"
              placeholder="search person"
              className="search-person"
            />
            <IoSearch className="search" />
          </div>
          <div className="chat">
            {chatname.map((chat, index) => (
              <div key={index} className="chat1">
                <div className="searchimg-div">
                  <img src={chat.chatimg} alt="error" className="searchimg" />
                  <div className="chat-active"></div>
                </div>
                <div className="commant">
                  <div className="student-name">
                    <h4>{chat.name}</h4>
                    <p>{chat.text}</p>
                  </div>
                  <div className="online-message">
                    <p className="chat-time">{chat.time}</p>
                    {chat.icon ? (
                      <div className={chat.class}>{chat.icon}</div>
                    ) : (
                      <p className="total-message">{chat.message}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-8 person2" style={{ position: "sticky" }}>
          {online_chat.map((index, chat) => (
            <div key={chat} className="online-person">
              <div className="online-head">
                <div className="online-img">
                  <img
                    src={index.img}
                    className="online_personimg"
                    alt="error"
                  />
                  <div className="online_student">
                    <h4> {index.name}</h4>
                    <p>{index.area}</p>
                  </div>
                </div>
                <div className="share_icon">
                  <PiShareNetwork className="sharenetwork" />
                  <PiDotsThreeOutlineVerticalFill />
                </div>
              </div>
            </div>
          ))}
          <div className="moji">
            <div className="red-alert">
              <div className="red-text">
                <p>
                  You can send only 10 messages for now. To chat more, you need
                  to book a session.
                </p>
                <p>Book Class Now</p>
              </div>
            </div>
            <div className="time-chat">
              {chat_time.map((time, chat) => (
                <div key={chat}>
                  <div className="time-chat2">
                    <p>{time.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {send_message.map((send, idex) => (
                <div key={idex}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginRight: "28px",
                    }}
                  >
                    <p className="send-msg0">{send.msg}</p>
                    <span className="chatimg">
                      {user && /^[A-Za-z]/.test(user)
                        ? user.charAt(0).toUpperCase()
                        : ""}
                    </span>
                  </div>
                  <div className="type-check">
                    <p>{send.icon}</p>
                    <p>{send.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="chat-window">
              {receive.map((receivechat, index) => (
                <div key={index}>
                  <div className="receivechat">
                    <img src={receivechat.user} alt="error" />
                    <p>{receivechat.msg}</p>
                  </div>
                  <div>
                    <p className="receivechat-time">{receivechat.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="send-message">
            <div className="input-container">
              <input
                className="writemessage"
                type="email"
                placeholder="Write your message here"
              />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMessages;
