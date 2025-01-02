import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import CommanProfileColFirst from "../CommanProfileColFirst";
import CommanProfileColSecond from "../CommanProfileColSecond";
import class_student_img9 from "../../../../../image/9.png";
import class_student_img8 from "../../../../../image/8.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./BookingHistory.css";

function BookingHistory() {
  const UpcomingClasses = [
    {
      class_student_img: class_student_img9,
      title: "Wrestling",
      date: "26 Aug, 2024",
      instructorName: "Mr. Smith Martin",
      price: "10.99",
      btnname: "Payment Succeed",
    },
    {
      class_student_img: class_student_img8,
      title: "Boxing",
      date: "05 Sep, 2024",
      instructorName: "Mr. Smith Martin",
      join: "View Invoice",
      price: "10.99",
      btnname: "Payment Unsuccessful",
    },
  ];
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
              <h5>Booking History</h5>
              <div>
                {UpcomingClasses.map((item, index) => (
                  <div key={index}>
                    <div className="student_upcoming_classes2">
                      <div className="student_upcoming_classes1">
                        <div>
                          <img
                            src={item.class_student_img}
                            alt="error"
                            className="class_student_img"
                          />
                        </div>
                        <div className="student_upcoming_title">
                          <h5>{item.title}</h5>
                          <div className="student_upcoming_date_">
                            <p>
                              <span>Class Date: </span>
                              {item.date}
                            </p>
                          </div>
                          <p>
                            <span>Instructor Name: </span>
                            {item.instructorName}
                          </p>
                        </div>
                      </div>

                      <div className="payment-button" id="payment-button">
                        <p> ${item.price}</p>
                        <button
                          className={`${
                            item.btnname === "Payment Succeed"
                              ? "success"
                              : "unsuccess"
                          } ${index === 1 ? "second-button" : ""}`}
                        >
                          {item.btnname}

                          <MdOutlineArrowOutward className="arrowup" />
                        </button>
                      </div>
                    </div>
                    <hr />
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

export default BookingHistory;
