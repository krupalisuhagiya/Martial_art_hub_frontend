import React, { useEffect, useRef } from "react";
import "./Home.css";
import img1 from "../../../../image/1.png";
import img2 from "../../../../image/2.png";
import img3 from "../../../../image/3.png";
import img4 from "../../../../image/4.png";
import img5 from "../../../../image/5.png";
import img11 from "../../../../image/11.png";
import img12 from "../../../../image/12.png";
import img13 from "../../../../image/13.png";
import img14 from "../../../../image/14.png";
import img15 from "../../../../image/15.png";
import img16 from "../../../../image/16.png";
import img17 from "../../../../image/17.png";
import img18 from "../../../../image/18.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong, FaRegStar, FaStar } from "react-icons/fa6";
import { Accordion } from "react-bootstrap";
import Footer from "../../../comman/Footer";
import Slider1 from "../../../comman/Slider1";
import Getintouch from "../../../comman/Getintouch";
import { IoIosHeart } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  // -------------------------------------slider-2----------------------------------------
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
  // ---------------scroll section--------------------
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section === "AboutUs" && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "ContactUs" && contactUsRef.current) {
      contactUsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/" && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  // -----------------------------second page-----------
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
  const navigate = useNavigate();
  const viewMore = (item) => {
    navigate("/Student_InstructorViewProfile", { state: { item } });
  };

  return (
    <div>
      <div className="home-1" id="home" ref={homeRef}>
        <h1 className="text-center">martial arts hub.</h1>
        <p className="text-center">
          The place to begin or elevate your martial arts journey. Created by
          martial artists for martial artists.
        </p>
        <div
          className="justify-center text-center two-button"
          style={{ paddingTop: "30px" }}
        >
          <button className="start rounded-pill"> Start Today</button>
          <button className="already rounded-pill">Already a Member</button>
        </div>
      </div>
      <section className="section-2">
        <div className="item1">
          <img src={img1} alt="img" />
          <h2>Sports Psychology</h2>
          <p>
            Choose a specialist to enhance your mental game and boost
            performance.
          </p>
        </div>
        <div className="item1">
          <img src={img2} alt="img" />
          <h2>Physio</h2>
          <p>
            Choose a specialist to optimize your recovery and maintain peak
            physical performance.
          </p>
        </div>
        <div className="item1">
          <img src={img3} alt="img" />
          <h2>Martial Arts Coaching</h2>
          <p>
            Choose your coach for 1-to-1 sessions, group sessions, or fight
            analysis, and elevate your game to new heights.
          </p>
        </div>
        <div className="item1">
          <img src={img4} alt="img" />
          <h2>S&C</h2>
          <p>
            Choose a specialist to tailor a strength and conditioning program to
            achieve your goals.
          </p>
        </div>
        <div className="item1">
          <img src={img5} alt="img" />
          <h2>Nutrition</h2>
          <p>
            Choose a specialist to guide your nutrition and meet your needs.
          </p>
        </div>
      </section>
      {/* -------------------------------------------slider------------------------------- */}
      <div>
        <Slider1 />
      </div>
      <section className="section-3  lg:px-8">
        <div className="md:px-14 px-6 section-3-1">
          <div className="d-flex flex-wrap section-3-2">
            <div className="section-3-cant">
              <h2>Can't see your discipline?</h2>
              <p>
                Can't find your martial art discipline in our list?
                <br /> Don't worry! Simply notify us, and we'll make
                <br /> every effort to add it to our offerings.
              </p>
            </div>
            <div className="discipline">
              <input
                type="text"
                placeholder="Enter Discipline's name"
                className="rounded-pill"
              />
              <br />
              <textarea placeholder="Description" />
              <div className="notify">
                <button className="rounded-pill">Notify Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-20 px-3 lg:px-8 section-4"
        ref={aboutUsRef}
        id="about-us"
      >
        <h2 className="title">martial arts hub.</h2>
        <div style={{ marginTop: "-35px" }}>
          <h2>Who we are</h2>
          <p className="welcome">
            Welcome to Martial Arts Hub, the global online platform for martial
            artists of all levels. We connect practitioners who want to learn
            and improve themselves with top-notch instructors who are passionate
            about sharing their knowledge and helping others. Our personalized
            guidance is tailored to fit your unique needs, whether you prefer
            the convenience of online sessions or the hands-on experience of
            face-to-face training.
          </p>
          <p className="but">
            But we don't stop there. At Martial Arts Hub, we believe in holistic
            improvement. That's why we also offer access to nutritionists,
            strength and conditioning coaches, physiotherapists, and sports
            psychologists. Our diverse network of experts ensures you have the
            comprehensive support you need to excel in every aspect of your
            martial arts journey. Wherever you are based in the world, you can
            join us at Martial Arts Hub and unlock your full potential. Your
            path to excellence starts here.
          </p>
          <div className="learn">
            <button className="start learn-more rounded-pill">
              Learn More
              <FaArrowRightLong className="arrow" />
            </button>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------Ready to learn----------------------- */}
      <section className="ready">
        <h2>Ready to Learn?</h2>
        <p>
          Ready to learn martial arts but need some direction? Don’t worry,
          we've got you covered. Join Us online classes and learn from
          world-class martial arts instructors. Train at your own pace and
          master the art of self-defense or message our instructors for
          personalized guidance.
        </p>
        <div className="two-button">
          <button className="rounded-pill">
            start Today
            <FaArrowRightLong className="arrow" />
          </button>

          <button
            className="rounded-pill"
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              marginLeft: "10px",
            }}
          >
            Learn More <FaArrowRightLong className="arrow" />
          </button>
        </div>
      </section>
      {/* -----------------------------------why join us------------------------------------------------ */}
      <section className="why">
        <h2 className="whyh2">Why Join Us</h2>
        <div>
          <div className="why-join">
            <div className="why-arts">
              <h2 className="whyh2">martial arts hub.</h2>
            </div>
            <div className="expert">
              <div className="expert-1">
                <h2>Expert Instructors</h2>
                <p>
                  Our highly qualified instructors bring years of experience and
                  passion to every class.
                </p>
                <div className="number">1.</div>
              </div>
            </div>
            <div className="diverse">
              <div className="diverse-1">
                <h2>Diverse Styles</h2>
                <p>
                  We offer a variety of martial arts styles, including Karate,
                  Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.
                </p>
                <div className="number-2">2.</div>
              </div>
            </div>
            <div className="supportive">
              <div className="supportive-1">
                <h2>Supportive Community</h2>
                <p>
                  Join a welcoming and encouraging community that fosters growth
                  and camaraderie.
                </p>
                <div className="number-3">3.</div>
              </div>
            </div>
            <div className="holistic">
              <div className="holistic-1">
                <h2>Holistic Development</h2>
                <p>
                  Our programs focus on physical fitness, mental resilience, and
                  building confidence.
                </p>
                <div className="number-4">4.</div>
              </div>
            </div>
            <div className="flexible">
              <div className="flexible-1">
                <h2>Flexible Training</h2>
                <p>
                  We provide classes for all ages and skill levels, ensuring
                  everyone can find their perfect fit.
                </p>
                <div className="number-5">5.</div>
              </div>
            </div>
            <div className="community">
              <div className="community-1">
                <h2>Community Focus</h2>
                <p>
                  Join a community dedicated to your personal growth and
                  excellence.
                </p>
                <div className="number-6">6.</div>
              </div>
            </div>
          </div>
          <div className="grid-cols-1 media-why">
            <div className="sm:pl-8 media-why-1">
              <h2>Expert Instructors</h2>
              <p>
                Our highly qualified instructors bring years of experience and
                passion to every class.
              </p>
              <div className="media-number-1">1.</div>
            </div>
            <div className="sm:pl-8 media-why-1 bg-black">
              <h2>Diverse Styles</h2>
              <p>
                We offer a variety of martial arts styles, including Karate,
                Taekwondo, Brazilian Jiu-Jitsu, Muay Thai, and Judo.
              </p>
              <div className="media-number-1 bg-black">2.</div>
            </div>
            <div className="sm:pl-8 media-why-1">
              <h2>Supportive Community</h2>
              <p>
                Join a welcoming and encouraging community that fosters growth
                and camaraderie.
              </p>
              <div className="media-number-1">3.</div>
            </div>
            <div className="sm:pl-8 media-why-1 bg-black">
              <h2>Holistic Development</h2>
              <p>
                Our programs focus on physical fitness, mental resilience, and
                building confidence.
              </p>
              <div className="media-number-1 bg-black">4.</div>
            </div>
            <div className="sm:pl-8 media-why-1">
              <h2>Flexible Training</h2>
              <p>
                We provide classes for all ages and skill levels, ensuring
                everyone can find their perfect fit.
              </p>
              <div className="media-number-1">5.</div>
            </div>
            <div className="sm:pl-8 media-why-1 bg-black">
              <h2>Community Focus</h2>
              <p>
                Join a community dedicated to your personal growth and
                excellence.
              </p>
              <div className="media-number-1 bg-black">6.</div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------slider-2--------------------------------- */}
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
      <section className="download">
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
      <section className="main-dose">
        <div className="how-dose">
          <h2>How does it Work?</h2>
          <p>Below are the steps of how to join as a student:</p>
          <div className="mt-12">
            <div className="four-icon">
              <div className="up">
                <div className="sign-up">
                  <img src={img15} alt="error" />
                </div>
                <h2>Sign Up</h2>
                <p>
                  Quickly create your account and join our martial arts
                  community.
                </p>
              </div>
              <div className="up">
                <div className="sign-up">
                  <img src={img17} alt="error" />
                </div>
                <h2>Get Verified</h2>
                <p>
                  Complete our simple verification for a safe and secure
                  training environment.
                </p>
              </div>
              <div className="up">
                <div className="sign-up">
                  <img src={img16} alt="error" />
                </div>
                <h2>Choose your instructor/coach</h2>
                <p>
                  Select from our experienced instructors to match your style
                  and goals.
                </p>
              </div>
              <div className="up">
                <div className="sign-up">
                  <img src={img18} alt="error" />
                </div>
                <h2>Begin your martial arts journey</h2>
                <p>
                  Start training, learn, and achieve your goals with our
                  supportive community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="join">
          <div className="network">
            <p>
              <span style={{ fontWeight: "700" }}>
                Join our network of martial arts professionals
              </span>
              and empower students with your knowledge. Enjoy the benefits of
              online teaching with a dedicated support system.
            </p>
            <button className="rounded-pill">
              Lead the Way
              <FaArrowRightLong className="arrow" />
            </button>
          </div>
        </div>
      </section>
      <section className="asked">
        <h2>Frequently Asked Questions</h2>
        <p>
          Welcome to our FAQ section! Here, you'll find answers to common
          questions about our martial arts classes, training, and what to
          expect.
        </p>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What age groups can participate in martial arts classes?
            </Accordion.Header>
            <Accordion.Body>
              For now our classes are designed for adults only.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Do I need any prior experience to join?
            </Accordion.Header>
            <Accordion.Body>
              For now our classes are designed for adults only.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What should I wear to my first class?
            </Accordion.Header>
            <Accordion.Body>
              For now our classes are designed for adults only.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How often should I attend classes to see progress?
            </Accordion.Header>
            <Accordion.Body>
              For now our classes are designed for adults only.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Is martial arts training safe?</Accordion.Header>
            <Accordion.Body>
              For now our classes are designed for adults only.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <Getintouch />
      </section>
      <footer id="contact-us" ref={contactUsRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
