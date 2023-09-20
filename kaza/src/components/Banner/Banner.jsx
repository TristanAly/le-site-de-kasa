import React from "react";

const Banner = (props) => {
  return (
    <div
      className="bannerImg"
      style={{ backgroundImage: `url(${props.banImg})` }}
    >
      <div className="bg">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Banner;
