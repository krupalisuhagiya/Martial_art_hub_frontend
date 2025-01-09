import React from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuLanguages } from "react-icons/lu";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { useLocation } from "react-router-dom";

function InstructorViewProfile() {
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
  // const location = useLocation();
  // const { item } = location.state;
  return (
    <div>
      <div style={{ paddingTop: "100px" }}>
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
          {/* <div className="col-md-3">
            <img src={item.image} alt={item.head1} style={{ width: "100%" }} />
            <div className="d-flex">
              <div className="d-flex home-star">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{item.star}</span>
                ))}
              </div>
              <span>{item.number}</span>
            </div>
            <h3>{item.head1}</h3>
            <p>{item.text1}</p>
            <button className="rounded-pill send">Send a Message</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default InstructorViewProfile;
