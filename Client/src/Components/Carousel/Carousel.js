import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselData from "../Data/Banner.js"
import { Link } from "react-router-dom";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <Slider {...settings}>
      {carouselData.map((item, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <Link to={item.to}>

            <img src={item.img} alt={item.title} className="img-fluid" />
            {(item.title || item.description)&&(
              <div className="carousel-caption d-none d-md-block">
                {item.title && <h5>{item.title}</h5>}
                {item.description &&<p>{item.description}</p>}
              </div>
            )}
          </Link>
         
          
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
