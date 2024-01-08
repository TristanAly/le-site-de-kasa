// import jsonData from "../data/logements.json";
import { Link } from "react-router-dom";
// data fetch
import React, { useState, useEffect } from "react";
import getLocation from "../../Service/getLocation.js";

export const Gallery = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLocation();
        setJsonData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données JSON (useEffect) :",
          error
        );
      }
    };
    fetchData();
  }, []);

  return (
    <div className="location">
      <div className="card_location">
        {jsonData &&
          jsonData.map((location) => {
            return (
              <Link to={`/location/${location.id}`} key={location.id}>
                <article className="card">
                  <div className="card_image">
                    <img
                      src={location.cover}
                      alt={location.title + "appartement"}
                    />
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
