import React from "react";
import emptyStar from "../../assets/starVide.png";
import fullStar from "../../assets/starRempli.png";

const Ratings = (rating) => {
  const score = rating.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rating_container">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="etoile"
            src={fullStar}
            alt="star_full"
          />
        ) : (
          <img
            key={note.toString()}
            className="etoile"
            src={emptyStar}
            alt="star_empty"
          />
        )
      )}
    </div>
  );
};

export default Ratings;
