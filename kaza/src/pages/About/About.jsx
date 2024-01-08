import React, { useState, useEffect } from "react";
import bannerImg from "../../assets/banner_2.png";
import Folding from "../../components/Folding/Folding";
import Banner from "../../components/Banner/Banner";
// data fetch
import getAbout from "../../Service/getAbout.js";

const About = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAbout();
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
    <div className="about">
      <Banner banImg={bannerImg} title={""} />
      <div className="about__description">
        {jsonData &&
          jsonData.map((about) => {
            return (
              <Folding
                categorie="about"
                title={about.title}
                content={about.content}
                key={about.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default About;
