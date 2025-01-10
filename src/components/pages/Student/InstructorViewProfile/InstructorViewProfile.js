import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import "./InstructorViewProfile.css";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import reviewsimg15 from "../../../../image/15.png";
import reviewsimg16 from "../../../../image/16.png";
import reviewsimg13 from "../../../../image/13.png";
import { IoIosHeart } from "react-icons/io";
import img11 from "../../../../image/11.png";
import img12 from "../../../../image/12.png";
import img13 from "../../../../image/13.png";
import img14 from "../../../../image/14.png";


function InstructorViewProfile() {
  const navigate = useNavigate();

  const experience = [
    "Over 20 years of martial arts experience",
    "Specialized in Karate, Taekwondo, and Brazilian Jiu-Jitsu",
    "Competed in national and international tournaments",
    "Trained under renowned martial arts masters globally",
  ];

  const certifications = [
    [
      "5th Degree Black Belt in Karate",
      "4th Degree Black Belt in Taekwondo",
      "Certified Brazilian Jiu-Jitsu Instructor",
    ],
    ["Certified Personal Trainer (CPT)", "First Aid and CPR Certified"],
  ];
  const hourly_rates = [
    {
      title: "First Free Session",
      details: "Book your first introductory session for free!",
    },
    {
      title: "Private Lesson (1-on-1)",
      details: "$75 per hour",
    },
    {
      title: "Group Class (up to 10 students)",
      details: "Book your first introductory session for free!",
    },
    {
      title: "Advanced Techniques Session",
      details: "$90 per hour",
    },
  ];
  const training = [
    "Began martial arts training at age 7 in Karate",
    "Achieved first black belt at age 15",
    "Competed in and won multiple national tournaments in Karate and Taekwondo",
    "Trained in Brazil for advanced Brazilian Jiu-Jitsu techniques",
    "Opened own dojo in 2010, focusing on personalized and group martial arts training",
    "Continuously attending seminars and workshops to stay updated with the latest martial arts techniques and teaching methods",
  ];
  // ---------------col-3------------------
  const location = useLocation();
  const { item } = location.state || {}; // Access the passed item

  // Function to render 5 stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const filledStars = Math.floor(rating); // Full stars (yellow)
    const emptyStars = 5 - filledStars; // Empty stars (grey)

    // Add yellow stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={`full-${i}`} style={{ color: "#FFB423" }} />);
    }

    // Add grey stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} style={{ color: "#BCBCBC" }} />);
    }

    return stars;
  };

  if (!item) {
    return <div>No profile data found</div>;
  }

  // ----------------------------------------slider---------------------
  const Reviews = [
    {
      icon: <FaQuoteLeft />,
      text: "Training here has been a transformative experience. I've gained confidence, discipline, and strength, thanks to the supportive and skilled instructors.",
      img: reviewsimg15,
      name: "Reviews 1",
      star: <FaStar />,
    },
    {
      icon: <FaQuoteLeft />,
      text: "The instructors are amazing and supportive. I've learned so much and made great friends. The positive atmosphere and challenging classes have made a huge difference in my fitness and focus.",
      img: reviewsimg16,
      name: "Reviews 2",
      star: <FaStar />,
    },
    {
      icon: <FaQuoteLeft />,
      text: "Training here has been a transformative experience. I've gained confidence, discipline, and strength, thanks to the supportive and skilled instructors.",
      img: reviewsimg13,
      name: "Reviews 3",
      star: <FaStar />,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  // ------------------------------------other instructor slider---------------------
  const imageData1 = [
    {
      image: img11,
      star: 4,
      number: "4.3(1200 Ratings)",
      head1: "Jhon Martin",
      text1: "experience in 30 yesr of marshlat and also many filed......",
    },

    {
      image: img12,
      star: 3,
      number: "4.3(1200 Ratings)",
      head1: "B Parag",
      text1: "experience in 10 yesr of marshlat and also many filed......",
    },

    {
      image: img13,
      star: 2,
      number: "4.3(1200 Ratings)",
      head1: "Maxi Miliun",
      text1: "experience in 20 yesr of marshlat and also many filed......",
    },
    {
      image: img14,
      star: 5,
      number: "4.3(1200 Ratings)",
      head1: "Kiya Jhon",
      text1: "experience in 20 yesr of marshlat and also many filed......",
    },
  ];
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
    const viewMore = (item) => {
      navigate("/Student_InstructorViewProfile", { state: { item } });
    };
  return (
    <div style={{ paddingTop: "100px" }}>
      <div className="student_InstructorViewProfile_container">
        <div className="row">
          <div className="col-md-9 div-col9">
            <div className="instuctore_profile_fourbutton">
              <button>Martial Arts</button>
              <button>Karate</button>
              <button>Taekwondo</button>
              <button>Jiu-Jitsu</button>
            </div>
            <div className="instuctore_profile_details">
              <h1>
                I'm here to support your fitness ambitions, cut fat, and develop
                strong, flexible muscles.
              </h1>
            </div>
            <div className="instuctore_profile_details1">
              <h3>Instructor</h3>
              <p>
                Top-rated instructor. Highly skilled, extensive experience,
                certified qualifications, and prompt responses. Alex is eager to
                schedule your first Pilates session.
              </p>
            </div>
            <div className="instuctore_profile_about">
              <h5>About Me</h5>
              <p>
                Hi, I'm Kia John! I started my martial arts journey 5 years ago
                and have been dedicated to improving my skills ever since.
              </p>
              <p>
                Training in Karate, Taekwondo, Brazilian Jiu-Jitsu has boosted
                my confidence, discipline, and physical fitness. I enjoy the
                challenges and continuous learning that come with martial arts.
                Outside of training, I love [hobbies/interests], which help keep
                me balanced and active. I'm grateful to be part of such a
                supportive martial arts community!
              </p>
            </div>
            <div className="instuctore_profile_class">
              <h5>About the Class</h5>
              <div className="instuctore_profile_about_button">
                <button>
                  <HiOutlineStatusOnline className="statusOnline" />
                  Online
                </button>
                <button>
                  <LiaVectorSquareSolid className="statusOnline" />
                  All Levels
                </button>
                <button>
                  <LuLanguages className="statusOnline" />
                  English
                </button>
              </div>
              <p>
                “This hour of martial arts training is a powerful gift to your
                body and mind, fostering inner strength and outer resilience.
                It's not just about learning techniques; it's about cultivating
                discipline, confidence, and a sense of empowerment. Beyond
                punches and kicks, it's about achieving overall well-being.
                Martial arts improve coordination and mental clarity, bringing
                vitality and balance to both your body and mind.”
              </p>
            </div>
            <div className="instructor_experience">
              <h5>Experience</h5>
              <div className="instructor_experience_div">
                {experience.map((item, index) => (
                  <div key={index}>
                    <p>
                      <RiVerifiedBadgeFill className="VerifiedBadgeFill" />
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="instructor_certifications_div">
              <h5>Certifications</h5>
              <div className="instructor_certifications">
                {certifications.map((point, index) => (
                  <div
                    key={index}
                    className={index === 1 ? "certification_s" : ""}
                  >
                    {point.map((point, groupindex) => (
                      <div key={groupindex}>
                        <p>
                          <RiVerifiedBadgeFill className="VerifiedBadgeFill" />
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="instructor_hourly_rates">
              <h5>Hourly Rates</h5>
              <div className="instructor_hourlyrates">
                {hourly_rates.map((item, index) => (
                  <div key={index} className="instructor_hourly_rates_div">
                    <p className="instructor_rates_p">
                      <RiVerifiedBadgeFill className="VerifiedBadgeFill_rates" />
                      {item.title}
                    </p>
                    <p className="instructor_details_p">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="instructor_training">
              <h5>Training History</h5>
              {training.map((item, index) => (
                <div key={index} className="instructor_training_div">
                  <p>
                    <RiVerifiedBadgeFill className="VerifiedBadgeFill" />
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <img
              src={item.image}
              alt={item.head1}
              style={{ width: "100%", borderRadius: "25px" }}
            />
            <h3 style={{ marginTop: "10px" }}>{item.head1}</h3>
            <div className="d-flex">
              <div className="d-flex home-star">
                <span>{renderStars(item.star)}</span>
              </div>
              <span>{item.number}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <h6>Response Time</h6>
              <h6>Hour</h6>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h6>Number of Students</h6>
              <h6>+</h6>
            </div>
            <button
              className="rounded-pill student_ins_profile_view"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Book Now
            </button>
            <button
              className="rounded-pill student_ins_profile_view"
              style={{ backgroundColor: "transparent" }}
            >
              <AiOutlineMessage
                style={{ fontSize: "20px", marginRight: "10px" }}
              />
              Send a Message
            </button>
            <button
              className="rounded-pill student_ins_profile_view"
              style={{ backgroundColor: "transparent" }}
            >
              <IoShareSocial
                style={{ fontSize: "20px", marginRight: "10px" }}
              />
              Share Instructor's Profile
            </button>
          </div>
        </div>
      </div>
      <section className="download" id="student_InstructorViewProfile_download">
        <h2>
          Download the App to Get more
          <span>
            <i> Benefits</i>
          </span>
        </h2>
        <p>
          Join us and begin your journey towards ultimate fitness, where you
          will feel empowered, stronger, healthier, and more confident than ever
          before.
        </p>
        <div className="get-app">
          <button className="rounded-pill">
            Get the App
            <FaArrowRightLong className="arrow" />
          </button>
        </div>
      </section>
      <div className="student_InstructorViewProfile_container">
        <section style={{ marginTop: "50px" }}>
          <div style={{ display: "flex" }}>
            <h3>Reviews</h3>
            <div style={{ marginLeft: "8px", marginTop: "5px" }}>
              <span style={{ marginRight: "4px" }}>
                <FaStar style={{ color: "#FFB423" }} />
              </span>
              <span style={{ fontSize: "15px" }}>{item.number}</span>
            </div>
          </div>
        </section>
        {/* -------------------------------slider------------------------------------ */}
        <section>
          <Slider {...settings}>
            {Reviews.map((img, index) => (
              <div
                key={index}
                style={{ padding: "0 10px" }}
                className="student_InstructorViewProfile_reviews"
              >
                <p>{img.icon}</p>
                <p>{img.text}</p>
                <div className="student_InstructorViewProfile_reviews1">
                  <img src={img.img} alt="error" />
                  <div>
                    <h6>{img.name}</h6>
                    <span>{img.star}</span>
                    <span>{img.star}</span>
                    <span>{img.star}</span>
                    <span>{img.star}</span>
                    <span>{img.star}</span>
                    <span>{item.number}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
        <section className="our">
          <h2>Our Instructors</h2>
          <div>
            <div className="slider-img1">
              <Slider {...settings1}>
                {imageData1.map((item, index) => (
                  <div key={index} className="slider-2">
                    <div style={{ position: "relative" }}>
                      <img
                        src={item.image}
                        alt={`Slide ${index}`}
                        style={{ width: "100%" }}
                      />
                      <div className="div-heart">
                        <IoIosHeart className="heart" />
                        {/* <GoHeart className="heart" /> */}
                      </div>
                    </div>
                    <div className="d-flex" style={{ marginTop: "8px" }}>
                      <div className="d-flex home-star">
                        <span>{renderStars(item.star)}</span>
                        {/* <span>{item.star}</span>
                      <span>{item.star}</span>
                      <span>{item.star}</span>
                      <span>{item.star}</span>
                      <span className="">{item.star}</span> */}
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          marginLeft: "5px",
                          marginTop: "3px",
                        }}
                      >
                        {item.number}
                      </span>
                    </div>
                    <h3 style={{ lineHeight: "1px" }}>{item.head1}</h3>
                    <p>{item.text1}</p>
                    <p>{item.button1}</p>

                    <button
                      className="rounded-pill view"
                      onClick={() => viewMore(item)}
                    >
                      View Profile
                    </button>
                    {/* <button className="rounded-pill view send">
                    Send a Message
                  </button> */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InstructorViewProfile;
