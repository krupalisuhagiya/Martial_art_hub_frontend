import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  const navLinks = [
    { name: "Dashboard", url: "/Dashboard" },
    { name: "My Messages", url: "/Messages" },
    { name: "My Classes", url: "/MyClasses" },
    { name: "My Invoices", url: "/MyInvoices" },
    { name: "Raise Dispute", url: "/RaiseDispute" },
  ];
  const myClassesPaths = [
    "/MyClasses",
    "/ongoing_classes",
    "/completed_classes",
  ];
  const raiseDisputePaths = ["/RaiseDispute","/closed_disputes"];
  const location = useLocation();
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          marginTop: "57px",
          width: "100%",
          position: "fixed",
          overflowX: "auto", // Allow horizontal scrolling
          whiteSpace: "nowrap", // Prevent line breaks
          zIndex: "1000",
        }}
      >
        <Navbar variant="dark" expand="lg" className="dashhead">
          <Container>
            <Nav className="d-flex flex-row">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className={`nav-link mx-2 ${
                    location.pathname === link.url ||
                    (link.url === "/MyClasses" && myClassesPaths.includes(location.pathname)) ||
                    (link.url === "/RaiseDispute" && raiseDisputePaths.includes(location.pathname))
                      ? "active"
                      : ""
                  }`}
                  style={{ color: "white" }}
                >
                  {link.name}
                </Link>
              ))}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Dashboard;
