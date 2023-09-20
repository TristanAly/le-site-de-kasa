// import { BannerImage } from "../../components/Banner/BannerImg";
import bannerImg from "/src/assets/banner-image.png";
import Banner from "../../components/Banner/Banner";
import { Gallery } from "../../components/Logement/Gallery";
export const Home = () => {
  return (
    <div>
      {/* <BannerImage /> */}
      <Banner banImg={bannerImg} title={"Chez vous, partout ailleurs"} />
      <Gallery />
    </div>
  );
};
