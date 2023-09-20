import React from "react";

const Host = (host) => {
  return (
    <div className="host_container">
      <p className="host_name">{host.name}</p>
      <img
        src={host.picture}
        alt="photo du créateur de l'annonce"
        className="host_picture"
      />
    </div>
  );
};

export default Host;
