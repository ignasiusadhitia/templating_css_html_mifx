import React, { useState } from "react";
import sliderData from "./slider-data";
import "./slider.styles.scss";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveToNextSlide = () => {
    if (slideIndex !== sliderData.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length - 1) {
      setSlideIndex(0);
    }
  };

  const moveToPreviousSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(sliderData.length - 1);
    }
  };

  const moveBullet = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container">
      <div className="slider-container mobile" style={{ position: "relative" }}>
        {sliderData.map((slide, index) => (
          <div
            className={slideIndex === index ? "image image-animation" : "image"}
            style={{
              backgroundImage: `url(${sliderData[slideIndex].image})`,
              position: "absolute",
            }}
          ></div>
        ))}
      </div>

      <div className="slider-container review">
        <div>
          <h1>Reviews</h1>
          <div className="border-bottom"></div>
          <p className="review-title">{sliderData[slideIndex].title}</p>
          <span className="quotation-symbol">&#8221;</span>
        </div>
        <div className="review-wrapper">
          <span onClick={moveToPreviousSlide}>&#9664;</span>
          <div className="review">
            <p>{sliderData[slideIndex].review}</p>
            <p className="reviewer">- {sliderData[slideIndex].reviewer}</p>
          </div>
          <span onClick={moveToNextSlide}>&#9654;</span>
        </div>
        <div className="bullets-wrapper">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index ? "bullets selected" : "bullets"}
              onClick={() => moveBullet(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
