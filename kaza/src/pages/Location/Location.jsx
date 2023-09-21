import { Link, useParams } from "react-router-dom";
import jsonData from "../../components/data/logements.json";
import Folding from "../../components/Folding/Folding";
import { useState } from "react";
import Error from "../Error/Error";
import Tags from "../../components/Tags/Tags";
import Ratings from "../../components/Rating/Ratings";
import Host from "../../components/Host/Host";
import TitleLocation from "../../components/Logement/TitleLocation";
import Carrousel from "../../components/Carrousel/Carrousel";

export const Location = () => {
  const { id } = useParams();
  const [data, setData] = useState(jsonData.find((data) => data.id === id));

  if (jsonData.find((data) => data.id === id) === undefined) {
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
