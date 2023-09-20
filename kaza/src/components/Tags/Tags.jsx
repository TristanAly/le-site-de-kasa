import React from "react";

const Tags = ({ getTag }) => {
  return (
    <div className="tagline">
      <p className="tagline__button">{getTag}</p>
    </div>
  );
};

export default Tags;
