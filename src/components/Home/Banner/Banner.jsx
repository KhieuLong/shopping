import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            veniam magni minus facere rerum veritatis harum natus ut libero fuga
            consequuntur
          </p>
          <div className="ctas">
            <div className="banner-cta">READ MORE</div>
            <div className="banner-cta v2">Show Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
