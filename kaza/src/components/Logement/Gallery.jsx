import jsonData from "../data/logements.json";
import { Link } from "react-router-dom";
export const Gallery = () => {
  return (
    <div className="location">
      <div className="card_location">
        {jsonData &&
          jsonData.map((location) => {
            return (
              <Link to={`/location/${location.id}`} key={location.id}>
                <article className="card">
                  <div className="card_image">
                    <img src={location.cover} alt="appartement" />
                  </div>
                  <div className="card_title">
                    <p>{location.title}</p>
                  </div>
                </article>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
