// import React from "react";
import arrowDown from "../../assets/arrow_back.png";
import React, { useState } from "react";

const Folding = ({ categorie, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${categorie}__description menu`}>
      <div
        className={`${categorie}__description menu title`}
        onClick={toggleContent}
      >
        {title}
        <img
          src={arrowDown}
          alt="Dérouler le menu"
          className={isOpen ? "rotate" : ""}
        />
      </div>

      {isOpen && (
        <div className={`${categorie}__description menu info`}>
          {Array.isArray(content) ? ( // Si c'est un objet = équipement
            <ul>
              {content.map((equipment, index) => (
                <li
                  key={index}
                  className={`${categorie}__description menu equipment`}
                >
                  {equipment}
                </li>
              ))}
            </ul>
          ) : (
            // le reste
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Folding;
