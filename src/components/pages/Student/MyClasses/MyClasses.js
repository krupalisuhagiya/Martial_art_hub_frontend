import React from "react";
import Dashboard from "../../../comman/Dashboard";
import Myclassheader from "../../../comman/student/myclasses/Myclassheader";
import "./MyClasses.css";
import class_student_img9 from "../../../../image/9.png";
import class_student_img8 from "../../../../image/8.png";

function MyClasses() {
  const UpcomingClasses = [
    {
      class_student_img: class_student_img9,
      title: "Wrestling",
      date: "26 Aug, 2024",
      classtype: "Online",
      instructorName: "Mr. Smith Martin",
      join: "01:00 PM",
    },
    {
      class_student_img: class_student_img8,
      title: "Boxing",
      date: "05 Sep, 2024",
      classtype: "Face-to-face",
      instructorName: "Mr. Smith Martin",
      join: "10:00 AM",
    },
  ];

  return (
    <div>
      <div>
        <Dashboard />
      </div>
      <div className="student_classes_Upcoming">
        <div>
          <Myclassheader />
        </div>
        <div>
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
                        <span className="student_upcoming_point">.</span>
                        <p>
                          <span>Class type: </span>
                          {item.classtype}
                        </p>
                      </div>
                      <p>
                        <span>Instructor Name: </span>
                        {item.instructorName}
                      </p>
                    </div>
                  </div>
                  <div className="student_class_joinbutton">
                    <button>Join at {item.join}</button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyClasses;
