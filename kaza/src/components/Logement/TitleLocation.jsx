import React from "react";

const TitleLocation = (props) => {
  return (
    <div className="location_title">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
    </div>
  );
};

export default TitleLocation;
