import "bootstrap/dist/css/bootstrap.min.css";
import Mainnavbar from "./components/Mainnavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/Student/Home/Home";
import Dashheader from "./components/pages/Student/Dashheader/Dashheader";
import MyMessages from "./components/pages/Student/MyMessages/MyMessages";
import MyClasses from "./components/pages/Student/MyClasses/MyClasses";
import MyInvoices from "./components/pages/Student/MyInvoices/MyInvoices";
import RaiseDispute from "./components/pages/Student/RaiseDispute/RaiseDispute";
import Instuctorsignup from "./components/pages/instrocuter/sign Up/Instuctorsignup";
import MyProfile from "./components/pages/instrocuter/MyProfileForm/MyProfile";
import MyProfileform from "./components/pages/instrocuter/MyProfile/MyProfileform";
import OngoingClasses from "./components/pages/Student/MyClasses/OngoingClasses";
import CompletedClasses from "./components/pages/Student/MyClasses/CompletedClasses";
import ClosedDisputes from "./components/pages/Student/RaiseDispute/ClosedDisputes";
import DisputeStage1 from "./components/pages/Student/RaiseDispute/DisputeStage1";
import Negotiation from "./components/pages/Student/RaiseDispute/Negotiation";
import Arbitration from "./components/pages/Student/RaiseDispute/Arbitration";
import StudentProfile from "./components/pages/Student/MyProfile/MyProfile/StudentProfile";

function App() {
  const navItem = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/AboutUS",
    },
    {
      name: "Contact Us",
      url: "/ContactUs",
    },
    {
      name: "Categories",
      url: "/Categories",
    },
  ];
  const location = useLocation();
  return (
    <div>
      {/* <Mainnavbar text={navItem} /> */}
      {location.pathname !== "/DisputeStage1" &&
        location.pathname !== "/Negotiation" && location.pathname !== "/Arbitration" && <Mainnavbar text={navItem} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dashboard" element={<Dashheader />} />
        <Route path="/Profile" element={<MyProfile />} />
        <Route path="/Messages" element={<MyMessages />} />
        <Route path="/MyClasses" element={<MyClasses />} />
        <Route path="/ongoing_classes" element={<OngoingClasses />} />
        <Route path="/completed_classes" element={<CompletedClasses />} />
        <Route path="/MyInvoices" element={<MyInvoices />} />
        <Route path="/RaiseDispute" element={<RaiseDispute />} />
        <Route path="/closed_disputes" element={<ClosedDisputes />} />
        <Route path="/DisputeStage1" element={<DisputeStage1 />} />
        <Route path="/Negotiation" element={<Negotiation />} />
        <Route path="/Arbitration" element={<Arbitration />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />

        {/* ----------------------instructor part------------------------------ */}
        <Route path="/Instuctorsignup" element={<Instuctorsignup />} />
        <Route path="/MyProfileform" element={<MyProfileform />} />
      </Routes>
    </div>
  );
}

export default App;
