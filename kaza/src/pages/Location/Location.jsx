import { Link, useParams } from "react-router-dom";
// import jsonData from "../../components/data/logements.json";
import Folding from "../../components/Folding/Folding";
import { useEffect, useState } from "react";
import Error from "../Error/Error";
import Tags from "../../components/Tags/Tags";
import Ratings from "../../components/Rating/Ratings";
import Host from "../../components/Host/Host";
import TitleLocation from "../../components/Logement/TitleLocation";
import Carrousel from "../../components/Carrousel/Carrousel";
// data fetch
import getLocation from "../../Service/getLocation.js";

export const Location = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await getLocation();

        const currentData = jsonData.find((item) => item.id === id);

        if (!currentData) {
          // Gérer le cas où l'ID n'est pas trouvé
          console.error("ID non trouvé");
          return;
        }

        setData(currentData);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données JSON ( useEffect ):",
          error
        );
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <Error />;
  }
  return (
    <section className="appartement" key={data.id}>
      <Carrousel slides={data?.pictures} />
      <div className="location-container">
        <div className="location_and_tag">
          <TitleLocation title={data?.title} location={data?.location} />
          <div className="tags">
            {data.tags &&
              data.tags.map((tag, i) => {
                return <Tags key={i} getTag={tag} />;
              })}
          </div>
        </div>
        <div className="host_and_rating">
          <Host name={data?.host.name} picture={data?.host.picture} />
          <Ratings score={data.rating} />
        </div>
      </div>
      <div className="appartement__description">
        <Folding
          categorie="product"
          title="Description"
          content={data.description}
        />
        <Folding
          categorie="product"
          title="Équipements"
          content={data.equipments}
        />
      </div>
    </section>
  );
};
