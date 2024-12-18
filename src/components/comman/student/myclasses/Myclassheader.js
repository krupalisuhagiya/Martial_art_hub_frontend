import React from "react";
import "./Myclassheader.css";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function Myclassheader() {
  const location = useLocation();
  const student_class = [
    {
      name: "Upcoming Classes",
      url: "/MyClasses",
    },
    {
      name: "Ongoing Classes",
      url: "/ongoing_classes",
    },
    {
      name: "Completed Classes",
      url: "/completed_classes",
    },
  ];
  return (
    <div>
      <div className="student_classheader">
        <div>
          <h3>My Classes</h3>
        </div>
        <Nav className="Student_class">
          {student_class.map((item, index) => (
            <Link
              key={index}
              to={item.url}
              className={`student_classes1 ${
                location.pathname === item.url ? "opetion_class" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </Nav>
      </div>
    </div>
  );
}

export default Myclassheader;
