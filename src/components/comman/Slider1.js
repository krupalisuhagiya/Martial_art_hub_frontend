import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Slider from "react-slick";
import img6 from "../../image/6.png";
import img7 from "../../image/7.png";
import img8 from "../../image/8.png";
import img9 from "../../image/9.png";
import Button from "../comman/Buttoncomman";
import "../comman/Slider1.css";
import { Modal } from "react-bootstrap";

function Slider1() {
  const settings = {
    dots: true,
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
  const imageData = [
    {
      img: img6,
      head: "Wrestling",
      text: "A grappling sport focused on takedowns, holds, and pins, enhancing strength and agility.",
      button: <Button text={"Read More"} />,
    },

    {
      img: img7,
      head: "Brazilian Jiu Jitsu",
      text: "A ground-based martial art emphasizing submissions and positional control using leverage and technique.",
      button: <Button text={"Read More"} />,
    },

    {
      img: img8,
      head: "Judo",
      text: "A Japanese martial art focused on throws, joint locks, and pins, teaching how to use an opponent's force against them.",
      button: <Button text={"Read More"} />,
    },
    {
      img: img9,
      head: "Boxing",
      text: "A striking discipline that develops punches, footwork, and defense, improving fitness and coordination.",
      button: <Button text={"Read More"} />,
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleGetOTP = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <section className="explore ">
        <div className="explore-1 container">
          <div className="find-div">
            <div className="Categories">
              <h2>Explore our Categories</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="search category"
                  className="search-category"
                />
                <IoSearch className="serch" />
                <button className="serch-btn rounded-pill">Find</button>
              </div>
            </div>
          </div>
          <div className="slider-img">
            <Slider {...settings}>
              {imageData.map((item, index) => (
                <div key={index} className="slider-2">
                  <img
                    src={item.img}
                    alt={`Slide ${index}`}
                    style={{ width: "100%" }}
                  />
                  <h3>{item.head}</h3>
                  <p>{item.text}</p>
                  <p onClick={() => handleGetOTP(item)}>{item.button}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <Modal show={isModalOpen} onHide={handleCloseModal} dialogClassName="custom-modal_slider1">
        <Modal.Body style={{borderRadius:"8px"}}>
          {selectedItem && (
            <div className="myprofile-informatino" id="myprofile-informatino">
              <div className="myprofile1">
                <img
                  src={selectedItem.img}
                  alt="Selected Slide"
                  style={{ width: "100%", height: "450px" }}
                />
                <input value={selectedItem.head} className="slider1_details_popup"/><br/>
                <textarea value={selectedItem.text} className="slider1_details_popup"/>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Slider1;
