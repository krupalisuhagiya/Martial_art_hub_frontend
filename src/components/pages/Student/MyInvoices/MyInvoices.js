import React, { useState } from "react";
import Dashboard from "../../../comman/Dashboard";
import "./MyInvoices.css";
import class_student_img9 from "../../../../image/9.png";
import class_student_img8 from "../../../../image/8.png";
import { IoIosHeart } from "react-icons/io";
import { MdDownloadForOffline } from "react-icons/md";

function MyInvoices() {
  const UpcomingClasses = [
    {
      class_student_img: class_student_img9,
      title: "Wrestling",
      date: "26 Aug, 2024",
      instructorName: "Mr. Smith Martin",
      join: "View Invoice",
    },
    {
      class_student_img: class_student_img8,
      title: "Boxing",
      date: "05 Sep, 2024",
      instructorName: "Mr. Smith Martin",
      join: "View Invoice",
    },
  ];
  // ------------------------------------popup model---------
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const Invoice = [
    {
      invoice_no: 132,
      invoice_date: "01/08/24",
    },
  ];
  const instructor_details = [
    {
      name: "Kiya John",
      area: "Brazilian Jiu Jitsu",
    },
  ];
  const student_details = [
    {
      name: "Harry Kim",
      date: "29 July 2024",
    },
  ];
  const invoice_table = [
    {
      name: "Brazilian Jiu Jitsu",
      Price: 4.99,
      Hour: 1,
      Subtotal: 4.99,
    },
  ];
  const bank_details = [
    {
      paid_via: "Paypal",
      Id: "12345678358",
      date: "29 July 24",
      total: 4.99,
    },
  ];
  const maskId = (Id) => {
    const idLength = Id.length - 3; // Correct spelling and logic
    return "*".repeat(idLength) + Id.slice(-3);
  };
  return (
    <div>
      <Dashboard />
      <div className="student_invoice">
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
                <div className="student_invoice_button">
                  <button onClick={openModal}>{item.join}</button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
        {isModalOpen && (
          <div className="modal">
            <div>
              <div className="modal-content1">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <div className="student_invoice_popup">
                  <h3>martial arts hub.</h3>
                  <div>
                    {Invoice.map((item, index) => (
                      <div key={index} className="student_invoice_popup1">
                        <p>
                          <span>Invoice No.: </span>
                          {item.invoice_no}
                        </p>
                        <p>
                          <span>Date Issued: </span>
                          {item.invoice_date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="student_invoice_details">
                  {instructor_details.map((details, group) => (
                    <div key={group}>
                      <div>
                        <p style={{ color: "rgb(121, 120, 120)" }}>
                          Instructor Details
                        </p>
                        <div className="instructor_details_div">
                          <p>{details.name}</p>
                          <p>{details.area}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {student_details.map((invoice, point) => (
                    <div key={point}>
                      <div>
                        <p style={{ color: "rgb(121, 120, 120)" }}>
                          Student Details
                        </p>
                        <div className="instructor_details_div">
                          <p>{invoice.name}</p>
                          <p>{invoice.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <table className="invoice-table">
                    <tr className="invoice_table_tr">
                      <th>Class Name</th>
                      <th style={{ textAlign: "center" }}>Price</th>
                      <th style={{ textAlign: "center" }}>Hour</th>
                      <th style={{ textAlign: "center" }}>Subtotal</th>
                    </tr>
                    {invoice_table.map((time, date) => (
                      <tr key={date} className="invoice_table_tr2">
                        <td>{time.name}</td>
                        <td style={{ textAlign: "center" }}>${time.Price}</td>
                        <td style={{ textAlign: "center" }}>{time.Hour}</td>
                        <td style={{ textAlign: "center", color: "#CB3530" }}>
                          ${time.Subtotal}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
              <div className="student_bank_details">
                <div className="bank-table">
                  <table className="invoice-table">
                    <tr className="invoice_table_tr">
                      <th>Bank Info</th>
                      <th>Payment Date</th>
                      <th>Total</th>
                    </tr>
                    {bank_details.map((bank, details) => (
                      <tr
                        key={details}
                        className="invoice_table_tr2"
                        id="invoice_table_tr2"
                      >
                        <td style={{ width: "200px" }}>
                          Paid Via: {bank.paid_via}
                          <p> Id: {maskId(bank.Id)}</p>
                        </td>
                        <td>{bank.date}</td>
                        <td style={{ color: "#CB3530", fontWeight: "600" }}>
                          ${bank.total}
                        </td>
                      </tr>
                    ))}
                  </table>
                  <div className="student_invoice_last">
                    <div>
                      <IoIosHeart className="student_invoice_hearticon" />
                      <span>Thank You!</span>
                    </div>
                    <button>
                      <MdDownloadForOffline className="student_invoice_downloadicon" />
                      Download Invoice
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyInvoices;
