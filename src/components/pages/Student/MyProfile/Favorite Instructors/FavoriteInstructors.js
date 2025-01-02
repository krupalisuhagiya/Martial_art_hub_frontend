// import React from "react";
// import CommanProfileColFirst from "../CommanProfileColFirst";
// import CommanProfileColSecond from "../CommanProfileColSecond";
// import Getintouch from "../../../../comman/Getintouch";
// import Footer from "../../../../comman/Footer";
// import { FaQuoteRight, FaStar } from "react-icons/fa6";
// import heartImg from "../../../../../image/Heart.png";
// import FavoriteInstructors11 from "../../../../../image/11.png";
// import FavoriteInstructors14 from "../../../../../image/14.png";
// import "./FavoriteInstructors.css";
// import { IoIosHeart } from "react-icons/io";
// function FavoriteInstructors() {
//   const Favorite_Instructors = [
//     {
//       img: FavoriteInstructors11,
//       hearticon: <IoIosHeart />,
//       staricon: <FaStar />,
//       ratings: "4.3 (1200 Ratings)",
//       name: "Keyn Mojho",
//       experience: "8+ years of experience",
//       view_button: "View Profile",
//       message_button: "send a message",
//     },
//     {
//       img: FavoriteInstructors14,
//       hearticon: <IoIosHeart />,
//       staricon: <FaStar />,
//       ratings: "4.3 (1200 Ratings)",
//       name: "Keyn Mojho",
//       experience: "5+ years of experience",
//       view_button: "View Profile",
//       message_button: "Send a message",
//     },
//   ];
//   return (
//     <div>
//       <div className="studentProfile_div">
//         <div className="studentProfile_container">
//           <div className="student_profile_FaQuoteRight_div">
//             <p className="student_profile_FaQuoteRight">
//               <FaQuoteRight />
//             </p>
//             <p className="studentProfile_p">
//               We are what we repeatedly do. Excellence then is not an act but a
//               habit.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="studentProfile_container1">
//         <div className="row">
//           <div className="col-md-3">
//             <CommanProfileColFirst />
//           </div>
//           <div
//             className="col-md-9"
//             style={{ marginTop: "30px", marginBottom: "50px" }}
//           >
//             <CommanProfileColSecond />
//             <div className="student_profile_forgot">
//               <div
//                 className="student_profile_forgot_div"
//                 style={{ padding: "50px" }}
//               >
//                 <img
//                   src={heartImg}
//                   alt="error"
//                   className="student_profile_forgotimg"
//                 />
//                 <h5>You don't have any favorites yet!</h5>
//                 <p>
//                   Your favorites list is currently empty. Discover and add your
//                   favorite items here to quickly access them anytime.
//                 </p>
//                 <button className="student_profile_favorite_button">
//                   Search Instructor
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Getintouch />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default FavoriteInstructors;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CommanProfileColFirst from "../CommanProfileColFirst";
import CommanProfileColSecond from "../CommanProfileColSecond";
import Getintouch from "../../../../comman/Getintouch";
import Footer from "../../../../comman/Footer";
import { FaQuoteRight } from "react-icons/fa6";
import heartImg from "../../../../../image/Heart.png";
import "./FavoriteInstructors.css";

function FavoriteInstructors() {
  const [favoriteInstructors, setFavoriteInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Favorite_Instructors")
      .then((response) => {
        setFavoriteInstructors(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch data:", err);
        setLoading(false);
      });
  }, []);

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
              {loading ? (
                
                  <div
                    className="student_profile_forgot_div"
                    style={{ padding: "50px" }}
                  >
                    <img
                      src={heartImg}
                      alt="error"
                      className="student_profile_forgotimg"
                    />
                    <h5>You don't have any favorites yet!</h5>
                    <p>
                      Your favorites list is currently empty. Discover and add
                      your favorite items here to quickly access them anytime.
                    </p>
                    <button className="student_profile_favorite_button">
                      Search Instructor
                    </button>
                  </div>
                
              ) : favoriteInstructors.length > 0 ? (
                <div className="favorite_instructors_list">
                  {favoriteInstructors.map((instructor, index) => (
                    <div key={index}>
                      <img
                        src={instructor.img}
                        alt={instructor.name}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                      <div style={{ marginTop: "10px" }}>
                        <h5>{instructor.name}</h5>
                        <p>{instructor.experience}</p>
                        <p>{instructor.ratings}</p>
                        <button
                          className="btn btn-primary"
                          style={{ marginRight: "10px" }}
                        >
                          {instructor.view_button}
                        </button>
                        <button className="btn btn-secondary">
                          {instructor.message_button}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Getintouch />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default FavoriteInstructors;
