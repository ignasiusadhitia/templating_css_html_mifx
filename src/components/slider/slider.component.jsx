import React from "react";
import "./slider.styles.scss";

const endpoint = process.env.PUBLIC_URL;
const imageUrl = endpoint + `/assets/images/sample1.jpeg`;

const Slider = () => {
  return (
    <div className="container">
      <div
        className="slider-container image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="slider-container review">
        <div>
          <h1>Reviews</h1>
          <div className="border-bottom"></div>
          <p className="review-title">Best PRICE</p>
          <span className="quotation-symbol">&#8221;</span>
        </div>
        <div className="review-wrapper">
          <span>&#9664;</span>
          <div className="review">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p className="reviewer">- Peter Amar</p>
          </div>
          <span>&#9654;</span>
        </div>
        <div className="bullets-wrapper">
          <div className="bullets selected"></div>
          <div className="bullets"></div>
          <div className="bullets"></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
