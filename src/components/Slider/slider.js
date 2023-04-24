import React, { useState } from "react";
import BtnSlider from "./BtnSlider";
// import dataSlider from "./dataSlider";
import Content from "../content.json";
import { useLocation } from "react-router-dom";

export default function Slider({ data }) {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== data.images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.images.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {data.images.map((path, index) => {
        return (
          <div
            key={path}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={process.env.PUBLIC_URL + `${path}`} alt={path} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: data.images.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
}
