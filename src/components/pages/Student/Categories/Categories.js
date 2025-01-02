import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import Slider from "react-slick";
import img11 from "../../../../image/11.png";
import img12 from "../../../../image/12.png";
import img13 from "../../../../image/13.png";
import img14 from "../../../../image/14.png";
import Footer from "../../../comman/Footer";
function Categories() {
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
      star: <FaStar />,
      number: "4.3(1200 Ratings)",
      head1: "Yash",
      text1: "experience in 30 yesr of marshlat and also many filed......",
    },

    {
      image: img12,
      star: <FaStar />,
      number: "4.3(1200 Ratings)",
      head1: "B Parag",
      text1: "experience in 10 yesr of marshlat and also many filed......",
    },

    {
      image: img13,
      star: <FaStar />,
      number: "4.3(1200 Ratings)",
      head1: "Maxi Miliun",
      text1: "experience in 20 yesr of marshlat and also many filed......",
    },
    {
      image: img14,
      star: <FaStar />,
      number: "4.3(1200 Ratings)",
      head1: "Jay",
      text1: "experience in 20 yesr of marshlat and also many filed......",
    },
  ];
  return (
    <div>
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
                      <span>{item.star}</span>
                      <span>{item.star}</span>
                      <span>{item.star}</span>
                      <span>{item.star}</span>
                      <span className="">{item.star}</span>
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
                    style={{ width: "100%", height: "45px" }}
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Categories;
