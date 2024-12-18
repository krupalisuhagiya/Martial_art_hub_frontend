import React from "react";
import Dashboard from "../../../comman/Dashboard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

function ClosedDisputes() {
  const location = useLocation();
  const disputes = [
    {
      name: "Active Disputes",
      url: "/RaiseDispute",
    },
    {
      name: "Closed Disputes",
      url: "/closed_disputes",
    },
  ];
  const table = [
    {
      id: "#23352",
      ClassName: "Brazilian Jiu Jitsu",
      InstructorName: "Keyn Mojho",
      DisputeAmount: "4.99",
      Result: "0.00 Received",
      dateClosed: "June 15, 2024",
      button: "View More",
    },
    {
      id: "#35243",
      ClassName: "Boxing",
      InstructorName: "Marry Jhon",
      DisputeAmount: "6.99",
      Result: "0.00 Received",
      dateClosed: "July 12, 2024",
      button: "View More",
    },
  ];
  const navigate = useNavigate();
    const dispute_create=()=>{
      navigate("/DisputeStage1"); 
    }
  return (
    <div>
      <Dashboard />
      <div>
        <div>
          <div className="student_raiseheader">
            <div style={{ position: "sticky" }}>
              <div>
                <h3>Disputes</h3>
              </div>
              <Nav className="Student_class">
                {disputes.map((item, index) => (
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
            <div className="student_dispute_table_wrapper">
              <table className="student_dispute_table">
                <thead>
                  <tr>
                    <th>Dispute ID</th>
                    <th>Class Name</th>
                    <th>Instructor's Name</th>
                    <th>Dispute Amount</th>
                    <th>Result</th>
                    <th>Date Closed</th>
                    <th>More</th>
                  </tr>
                </thead>
                <tbody className="student_dispute_tbody">
                  {table.map((dispute, student) => (
                    <tr key={student}>
                      <td>{dispute.id}</td>
                      <td>{dispute.ClassName}</td>
                      <td>{dispute.InstructorName}</td>
                      <td>${dispute.DisputeAmount}</td>
                      <td>${dispute.Result}</td>
                      <td>{dispute.dateClosed}</td>
                      <td className="student_dispute_morebutton">
                        <button>{dispute.button}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="student_dispute_createbutton">
              <button onClick={dispute_create}>Create New Dispute</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosedDisputes;
