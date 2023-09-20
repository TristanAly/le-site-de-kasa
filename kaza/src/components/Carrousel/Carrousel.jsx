import React, { useState } from "react";
import arrowLeft from "../../assets/arrow_left.png";
import arrowRight from "../../assets/arrow_right.png";

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const slideRight = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slide">
      <div className="arrows">
        {length > 1 && (
          <p className="leftArrow" onClick={slideLeft}>
            <img src={arrowLeft} />
          </p>
        )}
        {length > 1 && (
          <p className="rightArrow" onClick={slideRight}>
            <img src={arrowRight} />
          </p>
        )}
      </div>
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider active" : "slider"}
          >
            {index === current && (
              <img
                src={image}
                alt="img-appartement"
                className="slider__image"
              />
            )}
            {index === current && length > 1 && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carrousel;
